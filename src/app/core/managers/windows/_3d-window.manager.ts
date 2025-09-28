import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';

export interface ThreeWindowOptions {
  el?: HTMLElement;                                // container (optional, defaults to document.body)
  camera?: THREE.PerspectiveCamera | THREE.OrthographicCamera;
  scene?: THREE.Scene;
  renderer?: THREE.WebGLRenderer;
  composer?: EffectComposer;
  world?: THREE.Object3D;
  pixelRatio?: number;                              // overrides window.devicePixelRatio
  useComposer?: boolean;                            // auto create composer if true
  clearColor?: number;                              // renderer clear color
  clearAlpha?: number;                              // renderer clear alpha
  fov?: number;                                     // for perspective
  near?: number; far?: number;                      // clip planes
  ortho?: boolean;                                  // create orthographic camera if true
}

export class ThreeWindowManager {
  private camera!: THREE.PerspectiveCamera | THREE.OrthographicCamera;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private composer?: EffectComposer;
  private world!: THREE.Object3D;
  private pixelRatio = Math.min(2, window.devicePixelRatio || 1);
  private el!: HTMLElement;
  private rafId: number | null = null;
  private initialized = false;
  private clock = new THREE.Clock();

  constructor(opts?: ThreeWindowOptions) {
    if (opts?.pixelRatio) this.pixelRatio = opts.pixelRatio;
    if (opts?.el) this.el = opts.el;
    if (opts?.scene) this.scene = opts.scene;
    if (opts?.renderer) this.renderer = opts.renderer;
    if (opts?.composer) this.composer = opts.composer;
    if (opts?.world) this.world = opts.world;
    if (opts?.camera) this.camera = opts.camera;

    // Lazy defaults
    if (!this.el) this.el = document.body;
    if (!this.scene) this.scene = new THREE.Scene();
    if (!this.world) {
      this.world = new THREE.Group();
      this.world.name = 'world';
      this.scene.add(this.world);
    }

    if (!this.camera) {
      const w = this.el.clientWidth || window.innerWidth;
      const h = this.el.clientHeight || window.innerHeight;
      if (opts?.ortho) {
        const d = 1; // world units half-size; resize() will adjust
        this.camera = new THREE.OrthographicCamera(-d * w / h, d * w / h, d, -d, opts?.near ?? 0.1, opts?.far ?? 2000);
      } else {
        this.camera = new THREE.PerspectiveCamera(opts?.fov ?? 50, w / h, opts?.near ?? 0.1, opts?.far ?? 2000);
      }
      this.camera.position.set(0, 0, 5);
    }

    if (!this.renderer) {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      this.renderer.setPixelRatio(this.pixelRatio);
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.0;
    }

    if (opts?.clearColor !== undefined) {
      this.renderer.setClearColor(opts.clearColor, opts.clearAlpha ?? 1);
    }

    // attach canvas
    if (!this.renderer.domElement.parentElement) {
      this.el.appendChild(this.renderer.domElement);
    }

    // optional composer
    if (opts?.useComposer && !this.composer) {
      this.composer = new EffectComposer(this.renderer);
      const rp = new RenderPass(this.scene, this.camera);
      this.composer.addPass(rp);
    }

    // responsive
    this.resize = this.resize.bind(this);
    window.addEventListener('resize', this.resize, { passive: true });
  }

  getWorld(): THREE.Object3D { return this.world; }
  getScene(): THREE.Scene { return this.scene; }
  getCamera(): THREE.Camera { return this.camera; }
  getRenderer(): THREE.WebGLRenderer { return this.renderer; }
  getComposer(): EffectComposer | undefined { return this.composer; }

    init(sampleLights = true): void {
    if (this.initialized) return;
    this.initialized = true;

    // baseline size
    this.resize();

    if (sampleLights) {
      const amb = new THREE.AmbientLight(0xffffff, 0.6);
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(3, 4, 5);
      this.scene.add(amb, dir);
    }
  }


  start(update?: (dt: number, elapsed: number) => void): void {
    if (!this.initialized) this.init();
    const loop = () => {
      const dt = this.clock.getDelta();
      const t = this.clock.elapsedTime;
      if (update) update(dt, t);

      if (this.composer) {
        this.composer.render(dt);
      } else {
        this.renderer.render(this.scene, this.camera);
      }
      this.rafId = window.requestAnimationFrame(loop);
    };
    this.rafId = window.requestAnimationFrame(loop);
  }


  stop(): void {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.rafId = null;
  }



  resize(): void {
    const w = this.el.clientWidth || window.innerWidth;
    const h = this.el.clientHeight || window.innerHeight;

    // camera adapt
    if ((this.camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const cam = this.camera as THREE.PerspectiveCamera;
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    } else if ((this.camera as THREE.OrthographicCamera).isOrthographicCamera) {
      const cam = this.camera as THREE.OrthographicCamera;
      const viewSize = 1; // world half-height
      cam.top = viewSize;
      cam.bottom = -viewSize;
      cam.left = -viewSize * (w / h);
      cam.right = viewSize * (w / h);
      cam.updateProjectionMatrix();
    }

    this.renderer.setSize(w, h, false);
    this.renderer.setPixelRatio(this.pixelRatio);

    if (this.composer) {
      this.composer.setSize(w, h);
    }
  }


  dispose(): void {
    this.stop();
    window.removeEventListener('resize', this.resize);
    this.scene.traverse(obj => {
      // dispose geometries/materials/textures
      const anyObj = obj as any;
      if (anyObj.geometry) anyObj.geometry.dispose?.();
      if (anyObj.material) {
        const mats = Array.isArray(anyObj.material) ? anyObj.material : [anyObj.material];
        mats.forEach((m: any) => {
          for (const key in m) {
            const val = m[key];
            if (val && val.isTexture) val.dispose?.();
          }
          m.dispose?.();
        });
      }
    });
    this.renderer.dispose();
    this.renderer.domElement?.remove();
  }
}

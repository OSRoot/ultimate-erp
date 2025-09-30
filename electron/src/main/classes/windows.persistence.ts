import { promises as fs} from 'fs';
import { join } from 'path';
import { app } from 'electron';
import { WindowMetaData, WindowMetadataProps } from './windows.metadata';

/******************************************************************************************************/
export class WindowsPersistence {
  private filePath : string;
  private cache: Map<string, WindowMetaData> = new Map();

/******************************************************************************************************/
  constructor(fileName='windows.json'){
    this.filePath = join(app.getPath('userData'), fileName);
  }
/******************************************************************************************************/

  public async load():Promise<void> {
    try {
      const raw = await fs.readFile(this.filePath, 'utf-8');
      const parsed : WindowMetadataProps[] = JSON.parse(raw);
      parsed.forEach((meta)=> {
        if (meta) this.cache.set(meta.customId, new WindowMetaData(meta));
      });
      console.log('[WindowsPersistence] Loaded', parsed.length, 'metadata');
    } catch (error) {
      console.warn('[WindowsPersistence] No Previous Session Found');
    }
  }

/******************************************************************************************************/
  public async save():Promise<void> {
    const oll = Array.from(this.cache.values()).map((meta)=> meta.toJSON());
    await fs.writeFile(this.filePath, JSON.stringify(oll, null, 2));
    console.log('[WindowsPersistence] Saved', oll.length, 'metadata');
  }
/******************************************************************************************************/
  public add(meta: WindowMetaData):void {
    this.cache.set(meta.id, meta);
  }
/******************************************************************************************************/
  public remove(customId: string):void {
    this.cache.delete(customId);
  }
/******************************************************************************************************/
  public get(customId: string):WindowMetaData | undefined {
    return this.cache.get(customId);
  }

/******************************************************************************************************/
  public getAll():WindowMetaData[] { return Array.from(this.cache.values()); }
/******************************************************************************************************/
  public clearAll():void { this.cache.clear(); }
/******************************************************************************************************/

}

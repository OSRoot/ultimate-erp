/**
 * --------------------------------------------------------------------------
 * Security / Firewall
 * --------------------------------------------------------------------------
 */
export namespace OSsys {
  export namespace Firewall {
    export type RuleAction = 'allow' | 'deny' | 'block' | 'unblock' | 'ignore';
    export type Protocol   = 'tcp' | 'udp' | 'icmp' | 'igmp' | 'ip' | 'any';

    export interface Rule {
      id:string;
      name:string;
      action:RuleAction;
      protocol:Protocol;
      port?:number;
      srcIp ?:string;
      dstIp ?:string;
      enabled:boolean;
      createdAt:number;
      updatedAt:number;
      metadata?:Map<string, any>;
    }


    export interface AddRulePayload {
      name:string;
      action:RuleAction;
      protocol:Protocol;
      port?:number;
      srcIp ?:string;
      dstIp ?:string;
      metadata?:Map<string, any>;
    }

    export interface RemoveRulePayload {
      ruleId :string;
      force?:boolean;
    }

    export interface ToggleRulePayload {
      ruleId :string;
      enabled:boolean;
    }

    export interface STATUS {
      enabled:boolean;
      defaultAction:RuleAction;
      rules:Rule[];
    }

  }
}

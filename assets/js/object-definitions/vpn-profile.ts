export class VpnProfile {
  espProposal: string;
  flags: number;
  gateway: string;
  id: number;
  ikeProposal: string;
  name: string;
  password: string;
  uuid: string;
  
  constructor() {
    this.espProposal = '';
    this.flags = 0;
    this.gateway = '';
    this.id = 0;
    this.ikeProposal = '';
    this.name = '';
    this.password = '';
    this.uuid = '';
  }
}

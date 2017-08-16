export class MensagemParams {

  private type: string;
  private msg: string;
  private desc: string;

  constructor(type: string, msg: string, desc: string) {
    this.type = type;
    this.msg = msg;
    this.desc = desc;
  }

  getType(): string {
    return this.type;
  };

  setType(type: string): void {
    this.type = type;
  };

  getMsg(): string {
    return this.msg;
  };

  setMsg(msg: string): void {
    this.msg = msg;
  };

  getDesc(): string {
    return this.desc;
  };

  setDesc(desc: string): void {
    this.desc = desc;
  };

}

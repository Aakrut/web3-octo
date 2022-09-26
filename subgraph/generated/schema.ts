// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Blog extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Blog entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Blog must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Blog", id.toString(), this);
    }
  }

  static load(id: string): Blog | null {
    return changetype<Blog | null>(store.get("Blog", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blogcoverhash(): string {
    let value = this.get("blogcoverhash");
    return value!.toString();
  }

  set blogcoverhash(value: string) {
    this.set("blogcoverhash", Value.fromString(value));
  }

  get blogtitle(): string {
    let value = this.get("blogtitle");
    return value!.toString();
  }

  set blogtitle(value: string) {
    this.set("blogtitle", Value.fromString(value));
  }

  get blogcontent(): string {
    let value = this.get("blogcontent");
    return value!.toString();
  }

  set blogcontent(value: string) {
    this.set("blogcontent", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value!.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get date(): string {
    let value = this.get("date");
    return value!.toString();
  }

  set date(value: string) {
    this.set("date", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value!.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }
}
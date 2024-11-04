import "reflect-metadata";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  ManyToMany,
} from "typeorm";
import { IsBoolean, IsString } from "class-validator";
import { Status } from "../status/status.entities";
import { Lang } from "../langs/lang.entities";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Repo extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn()
  @IsString()
  id: string;

  @Field()
  @Column()
  @IsString()
  name: string;

  @Field()
  @Column()
  @IsString()
  url: string;

  @Field()
  @Column({ default: false })
  @IsBoolean()
  isFavorite: boolean;

  @Field(() => Status)
  @ManyToOne(() => Status, (status) => status.id)
  status: Status;

  @Field(() => [Lang])
  @ManyToMany(() => Lang, (lang) => lang.repos)
  langs?: Lang[];
}

@ObjectType()
export class LightRepo extends BaseEntity {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  isFavorite: boolean;
}
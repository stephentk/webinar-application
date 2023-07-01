import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Webinar {
@PrimaryGeneratedColumn()
id:number;
@Column()
title:string;
@Column()
imageurl:string
@Column()
description:string
@Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
createdAt:Date;
@Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
updatedAt:Date;
}


import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Webinar1 {
@PrimaryGeneratedColumn()
id:number;
@Column()
title:string;
@Column()
description:string
@Column()
date:string
@Column()
category:string
@Column()
imageurl:string


}
import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Webinar2 {
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
image:string
@Column()
url:string



}
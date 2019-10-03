import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, UpdateDateColumn } from 'typeorm';

import { Channel } from './Channel';
import { Guild } from './Guild';
import { InviteCodeSetting } from './InviteCodeSetting';
import { Join } from './Join';
import { Member } from './Member';

@Entity()
export class InviteCode {
	@Column({
		charset: 'utf8mb4',
		collation: 'utf8mb4_bin',
		length: 16,
		primary: true
	})
	public code: string;

	@CreateDateColumn()
	public createdAt: Date;

	@UpdateDateColumn()
	public updatedAt: Date;

	@Column({ nullable: true })
	public deletedAt: Date;

	@Column()
	public maxAge: number;

	@Column()
	public maxUses: number;

	@Column()
	public uses: number;

	@Column()
	public temporary: boolean;

	@Column({ type: 'int' })
	public clearedAmount: number;

	@Column()
	public isVanity: boolean;

	@Column()
	public isWidget: boolean;

	@Column({ nullable: true })
	public channelId: string;

	@ManyToOne(type => Channel, c => c.inviteCodes)
	public channel: Channel;

	@Column({ nullable: true })
	public guildId: string;

	@ManyToOne(type => Guild, g => g.inviteCodes)
	public guild: Guild;

	@Column({ nullable: true })
	public inviterId: string;

	@ManyToOne(type => Member, m => m.inviteCodes)
	public inviter: Member;

	@OneToMany(type => InviteCodeSetting, i => i.invite)
	public inviteCodeSettings: InviteCodeSetting[];

	@OneToMany(type => Join, j => j.exactMatch)
	public joins: Join[];
}

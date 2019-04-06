import { Readable } from 'stream';

export enum BotType {
	regular = 'regular',
	pro = 'pro',
	custom = 'custom'
}

export interface BasicUser {
	id: string;
	createdAt: number;
	username: string;
	avatarURL: string;
	discriminator: string;
}

export enum Permissions {
	ADMINISTRATOR = 'administrator',
	READ_MESSAGES = 'readMessages',
	SEND_MESSAGES = 'sendMessages',
	EMBED_LINKS = 'embedLinks',
	MANAGE_GUILD = 'manageGuild',
	VIEW_AUDIT_LOGS = 'viewAuditLogs',
	MANAGE_ROLES = 'manageRoles',
	CREATE_INSTANT_INVITE = 'createInstantInvite',
	BAN_MEMBERS = 'banMembers',
	KICK_MEMBERS = 'kickMembers'
}

export enum PromptResult {
	SUCCESS,
	FAILURE,
	TIMEOUT
}

export enum CommandGroup {
	Invites = 'Invites',
	Ranks = 'Ranks',
	Config = 'Config',
	Info = 'Info',
	Premium = 'Premium',
	Moderation = 'Moderation',
	Report = 'Report',
	Music = 'Music',
	Other = 'Other'
}

export enum ShardCommand {
	CACHE = 'CACHE',
	CUSTOM = 'CUSTOM',
	DIAGNOSE = 'DIAGNOSE',
	FLUSH_CACHE = 'FLUSH_CACHE',
	SUDO = 'SUDO',
	OWNER_DM = 'OWNER_DM',
	USER_DM = 'USER_DM',
	LEAVE_GUILD = 'LEAVE_GUILD',
	STATUS = 'STATUS'
}

export enum ChartType {
	joins = 'joins',
	leaves = 'leaves',
	usage = 'usage'
}

export enum BotCommand {
	config = 'config',
	botConfig = 'botConfig',
	inviteCodeConfig = 'inviteCodeConfig',
	memberConfig = 'memberConfig',
	permissions = 'permissions',
	interactiveConfig = 'interactiveConfig',

	botInfo = 'botInfo',
	credits = 'credits',
	getBot = 'getBot',
	help = 'help',
	members = 'members',
	ping = 'ping',
	prefix = 'prefix',
	setup = 'setup',
	support = 'support',

	export = 'export',
	premium = 'premium',
	tryPremium = 'tryPremium',

	makeMentionable = 'makeMentionable',
	mentionRole = 'mentionRole'

	/*report = 'report',*/
}

export enum InvitesCommand {
	createInvite = 'createInvite',
	addInvites = 'addInvites',
	clearInvites = 'clearInvites',
	fake = 'fake',
	info = 'info',
	inviteCodes = 'inviteCodes',
	inviteDetails = 'inviteDetails',
	invites = 'invites',
	legacyInvites = 'legacyInvites',
	leaderboard = 'leaderboard',
	legacyLeaderboard = 'legacyLeaderboard',
	removeInvites = 'removeInvites',
	restoreInvites = 'restoreInvites',
	subtractFakes = 'subtractFakes',
	subtractLeaves = 'subtractLeaves',

	addRank = 'addRank',
	ranks = 'ranks',
	removeRank = 'removeRank',

	graph = 'graph'
}

export enum ModerationCommand {
	punishmentConfig = 'punishmentConfig',
	strikeConfig = 'strikeConfig',

	check = 'check',
	caseDelete = 'caseDelete',
	caseView = 'caseView',

	ban = 'ban',
	mute = 'mute',
	kick = 'kick',
	softBan = 'softBan',
	strike = 'strike',
	unban = 'unban',
	unhoist = 'unhoist',
	unmute = 'unmute',
	warn = 'warn',

	clean = 'clean',
	cleanText = 'cleanText',
	cleanShort = 'cleanShort',
	purgeSafe = 'purgeSafe',
	purgeUntil = 'purgeUntil',
	purge = 'purge'
}

export enum MusicCommand {
	play = 'play',
	pause = 'pause',
	resume = 'resume',
	skip = 'skip',
	seek = 'seek',
	queue = 'queue',
	rewind = 'rewind',
	nowPlaying = 'nowPlaying',
	disconnect = 'disconnect',
	search = 'search',
	volume = 'volume',
	repeat = 'repeat',
	mashup = 'mashup',
	lyrics = 'lyrics'
}

export enum ChannelType {
	GUILD_TEXT = 0,
	DM = 1,
	GUILD_VOICE = 2,
	GROUP_DM = 3,
	GUILD_CATEGORY = 4
}

export interface MusicQueue {
	current: MusicQueueItem;
	queue: MusicQueueItem[];
}

export interface MusicQueueItem {
	id: string;
	title: string;
	link?: string;
	platform: MusicPlatform;
	duration: number | null;
	user: BasicUser;
	imageURL: string;
	extras: { name: string; value: string; inline?: boolean }[];
	getStream: () => Promise<string | Readable>;
}

export enum MusicPlatform {
	YouTube = 'youtube',
	SoundCloud = 'soundcloud',
	RaveDJ = 'ravedj',
	iHeartRADIO = 'iheartradio'
}

export interface BasicInvite {
	code: string;
	channel: {
		id: string;
		name: string;
	};
}
export interface BasicMember {
	nick?: string;
	user: {
		id: string;
		username: string;
		discriminator: string;
		avatarURL: string;
	};
}

type Icon = 'Web'
	| 'Discord'
	| 'Facebook'
	| 'Instagram'
	| 'LinkedIn'
	| 'Pinterest'
	| 'Reddit'
	| 'Skype'
	| 'Snapchat'
	| 'Telegram'
	| 'TikTok'
	| 'Viber'
	| 'Vimeo'
	| 'VK (VKontakte)'
	| 'WhatsApp'
	| 'X (Twitter)'
	| 'YouTube'
	| 'Zoom';

export default interface LinksProps {
	url: string;
	text: string;
	icon: Icon;
}
export interface InstagramPost {
  link: string;
  caption?: string;
  author?: string;
  timestamp?: string;
}

export interface InstagramOEmbed {
  version: string;
  title: string;
  author_name: string;
  author_url: string;
  author_id: string;
  media_id: string;
  provider_name: string;
  provider_url: string;
  type: string;
  width: number;
  height: number;
  html: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
}

export type LinkItem = {
  _id: string;
  userName?: string;
  passWord?: string;
  shortUrl: string;
  longUrl: string;
  clicks?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateLinkInput = {
  userName: string;
  passWord: string;
  shortUrl: string;
  longUrl: string;
};
export type RootStackParamList = {
  Root: undefined;
  NewIpset: undefined;
  Profile: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Messages: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type SearchNavigatorParamList = {
  SearchScreen: undefined;
};
export type NotificationNavigatorParamList = {
  NotificationScreen: undefined;
};
export type MessageNavigatorParamList = {
  MessageScreen: undefined;
};
export type Usertype = {
  id:string,
  name: string,
  username: string,
  image?: string,
};

export type IpsetType= {
  id:string,
  createdAt: string,
  user: Usertype,
  content: string,
  image?: string,
  numberOFComments?: number,
  numberOFRepsets?:number,
  numberOFLikes?:number,
}

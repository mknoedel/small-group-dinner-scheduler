import { DinnerResponse, SignUpResponse, UserResponse } from '@/utils/api-client';

const michael: UserResponse = {
  id: '1',
  firstName: 'Michael',
  lastName: 'Boo',
  email: 'michael.boo@gmail.com',
};
const molly: UserResponse = {
  id: '2',
  firstName: 'Molly',
  lastName: 'Coo',
  email: 'molly.coo@gmail.com',
};
const taegan: UserResponse = {
  id: '3',
  firstName: 'Taegan',
  lastName: 'Woo',
  email: 'taegan.woo@gmail.com',
};
const zach: UserResponse = {
  id: '4',
  firstName: 'Zach',
  lastName: 'Loo',
  email: 'zach.loo@gmail.com',
};
const gautam: UserResponse = {
  id: '5',
  firstName: 'Gautam',
  lastName: 'Coo',
  email: 'gautam.coo@gmail.com',
};
const rachel: UserResponse = {
  id: '6',
  firstName: 'Rachel',
  lastName: 'Woo',
  email: 'rachel.woo@gmail.com',
};

const taeganSignup: SignUpResponse = {
  userId: taegan.id,
  signUpDate: '12/1/2024',
  user: taegan,
};
const zachSignup: SignUpResponse = {
  userId: zach.id,
  signUpDate: '12/1/2024',
  user: zach,
};
const gautamSignup: SignUpResponse = {
  userId: gautam.id,
  signUpDate: '12/1/2024',
  user: gautam,
};
const rachelSignup: SignUpResponse = {
  userId: rachel.id,
  signUpDate: '12/1/2024',
  user: rachel,
};

export const dinner1: DinnerResponse = {
  id: '1',
  name: 'dinner',
  date: '12/12/2024',
  description: 'Get sum fud',
  groupId: '1',
  capacity: 12,
  signUpMethod: 'FirstComeFirstServe',
  imageUrl: 'https://ginadrellack.com/wp-content/uploads/2020/12/wut-meme.jpg',
  hosts: [michael, molly],
  signUps: [taeganSignup, zachSignup],
  waitList: [gautamSignup, rachelSignup],
};
export const dinner2: DinnerResponse = {
  id: '2',
  name: 'dinner',
  date: '12/12/2024',
  description: 'Get sum more fud',
  groupId: '1',
  capacity: 12,
  signUpMethod: 'FirstComeFirstServe',
  imageUrl: 'https://ginadrellack.com/wp-content/uploads/2020/12/wut-meme.jpg',
  hosts: [michael],
  signUps: [taeganSignup, gautamSignup, rachelSignup],
  waitList: [zachSignup],
};
export const dinner3: DinnerResponse = {
  id: '3',
  name: 'dinner',
  date: '12/12/2024',
  description: 'Get sum even more fud',
  groupId: '1',
  capacity: 12,
  signUpMethod: 'FirstComeFirstServe',
  imageUrl: 'https://ginadrellack.com/wp-content/uploads/2020/12/wut-meme.jpg',
  hosts: [molly],
  signUps: [gautamSignup],
  waitList: [taeganSignup, zachSignup, rachelSignup],
};
export const dinners: DinnerResponse[] = [dinner1, dinner2, dinner3];

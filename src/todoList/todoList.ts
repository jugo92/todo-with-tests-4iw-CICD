import EmailSenderService from '../emailService/EmailSenderService';
import Item from '../item/item';
import User from '../user/user';

class ToDoList {
  creator: User;
  items: Item[];
  title: string;
  last_insertion: Date | null;

  constructor(
    creator: User,
    items: Item[],
    title: string,
    last_insertion: Date | null
  ) {
    this.creator = creator;
    this.items = items;
    this.title = title;
    this.last_insertion = last_insertion;
  }

  addItem(item: Item): void {

    if(!item.isValid()){
      throw Error('Item invalide.');
    }

    if (this.canAddItem()) {
      if (this.items.length < 10) {
        this.items.push(item);

        if (this.items.length === 8) {
          this.sendEmailNotification();
        }

      } else {
        throw Error('TodoList has already 10 items.');
      }
    } else {
      throw new Error('Time constraint violated.');
    }
  }

   canAddItem(): boolean {
    if (!this.last_insertion) {
      return true;
    }

    const minTimeDifference = 30 * 60 * 1000; // 30 minutes in milliseconds
    const currentTime = new Date();
    const elapsedTime = currentTime.getTime() - this.last_insertion.getTime();

    return elapsedTime >= minTimeDifference;
  }

  sendEmailNotification(): void {
    new EmailSenderService().sendEmail();
  }
}
export default ToDoList;

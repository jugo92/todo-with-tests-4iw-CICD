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

  private canAddItem(): boolean {
    if (!this.last_insertion) {
      return true;
    }

    const minTimeDifference = 30 * 60 * 1000; // 30 minutes in milliseconds
    const currentTime = new Date();
    const elapsedTime = currentTime.getTime() - this.last_insertion.getTime();

    return elapsedTime >= minTimeDifference;
  }

  private sendEmailNotification(): void {
    const remainingItems = 10 - this.items.length;
    const emailSubject = "Limite d'ajout d'items atteinte";
    const emailBody = `Vous ne pouvez plus ajouter que ${remainingItems} items à votre ToDoList.`;

    new EmailSenderService().sendEmail(
      this.creator.email,
      emailSubject,
      emailBody
    );
  }
}
export default ToDoList;

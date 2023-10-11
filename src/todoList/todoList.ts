import EmailSenderService from "../emailService/EmailSenderService";
import Item from "../item/item";
import User from "../user/user";

class ToDoList {
  creator: User ;
  items: Item[];
  title: string;
  last_insertion : Date;
  emailSenderService: EmailSenderService;
  

  constructor( creator: User, items: Item[],title: string, last_insertion: Date, emailSenderService: EmailSenderService) {
    this.creator = creator;
    this.items = items;
    this.title = title;
    this.last_insertion = last_insertion;
    this.emailSenderService = emailSenderService;
  }

  isValidUser(): boolean{
    return this.creator.isValid();
  }


  addItem(item:Item): void {
    if (this.isValidUser() && this.canAddItem() ) {
        if (this.items.length < 10) {
            this.items.push(item);

            if (this.items.length === 8) {
                this.sendEmailNotification();
            }

            console.log(`Item '${item.name}' added to ToDoList '${this.title}'`);
        } else {
            console.log('Item not added. ToDoList has reached the maximum limit (10 items).');
        }
    } else {
        console.log('Item not added. User is not valid or time constraint violated.');
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
    const emailSubject = 'Limite d\'ajout d\'items atteinte';
    const emailBody = `Vous ne pouvez plus ajouter que ${remainingItems} items à votre ToDoList.`;

    this.emailSenderService.sendEmail(this.creator.getEmail(), emailSubject, emailBody);
}
}
export default ToDoList;






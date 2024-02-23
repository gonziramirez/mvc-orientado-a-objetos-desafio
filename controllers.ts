import { ContactsCollection, Contact } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts =  new ContactsCollection();
    this.contacts.load()
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get") {
      if (options.params && options.params.id) {
        return this.contacts.getOneById(options.params.id);
      } else {
        return this.contacts.getAll();
      }
    } else if (options.action === "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
      return 'Datos guardados exitosamente';
    } else {
      console.error('Acción inválida o parámetros faltantes');
      return null;
    }
  }
}

export { ContactsController };

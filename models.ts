import * as jsonfile from 'jsonfile'

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = []
  load() {
    try {
      const json = jsonfile.readFileSync('./contacts.json');

      if (Array.isArray(json)) {
        this.data = json;
      } else {
        console.error('Error: El archivo JSON no contiene un array válido.');
      }
    } catch (error) {
      console.error('Error al leer el archivo JSON:', error);
    }
  }
  getAll(){
    return this.data
  }
  addOne(contact:Contact){
    this.data.push(contact)
  }
  save(){
    jsonfile.writeFileSync('./contacts.json', this.data)
  }
  getOneById(id: number): Contact | null {
    if (Array.isArray(this.data)) {
      const encontrado = this.data.find((contacto) => contacto.id === id);
      return encontrado || null;
    } else {
      console.error('Error: this.data no es un array');
      return null;
    }
  }
}
export { ContactsCollection, Contact };


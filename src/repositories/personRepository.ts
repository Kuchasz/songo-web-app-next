import onasData from '../files/onas.json';

export interface Person {
  id: string;
  name: string;
  photoUrl?: string;
  photoUrlFull?: string;
  description?: string;
  instruments?: string;
}

export async function getAllPersons(): Promise<Person[]> {
  const persons = onasData?.onas?.okims || [];
  return persons.map((person: any, index: number) => ({
    id: `person-${index}`,
    name: person.imie?._text || `Person ${index + 1}`,
    photoUrl: person.thumb?._text ? `/images/about/${person.thumb._text}.jpg` : undefined,
    photoUrlFull: person.thumb?._text ? `/images/about/${person.thumb._text}-full.jpg` : undefined,
    description: person.opis?._text || '',
    instruments: person.whatplay?._text || undefined
  }));
}

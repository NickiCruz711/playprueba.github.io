
import { Album, Track } from './types';

// Renamed from TRACK_DATA for clarity
export const NOHEMI_TRACKS: Track[] = [
  { id: 1, title: 'Boleto de salida', artist: 'Nohemí', albumArt: 'https://dn721502.ca.archive.org/0/items/luis_20250625/004.jpg', audioSrc: 'https://archive.org/download/desmuda_202506/01%20-%20Boleto%20de%20salida.mp3' },
  { id: 2, title: 'Sin miedo a decirte', artist: 'Nohemí', albumArt: 'https://dn721502.ca.archive.org/0/items/luis_20250625/004.jpg', audioSrc: 'https://archive.org/download/desmuda_202506/02%20-%20Sin%20miedo%20a%20decirte.mp3' },
  { id: 3, title: 'La sombra de un cuento', artist: 'Nohemí', albumArt: 'https://dn721502.ca.archive.org/0/items/luis_20250625/004.jpg', audioSrc: 'https://archive.org/download/desmuda_202506/05%20-%20La%20sombra%20de%20un%20cuento.mp3' },
  { id: 4, title: 'Cicatrices de papel', artist: 'Nohemí', albumArt: 'https://dn721502.ca.archive.org/0/items/luis_20250625/luis.png', audioSrc: 'https://archive.org/download/desmuda_202506/06%20-%20Cicatrices%20de%20papel.mp3' },
  { id: 5, title: 'Me hablaron de canciones', artist: 'Nohemí', albumArt: 'https://dn721502.ca.archive.org/0/items/luis_20250625/004.jpg', audioSrc: 'https://archive.org/download/desmuda_202506/09%20-%20Me%20hablaron%20de%20canciones%20.mp3' },
  { id: 6, title: 'El cuervo y el espejo', artist: 'Nohemí', albumArt: 'https://dn721502.ca.archive.org/0/items/luis_20250625/005.jpg', featuring: 'Coda', audioSrc: 'https://archive.org/download/desmuda_202506/10%20-%20El%20cuervo%20y%20el%20espejo%20con%20Coda.mp3' },
];

export const JOSUE_MEDINA_TRACKS: Track[] = [
  { id: 7, title: 'Tu Hijo Soy', artist: 'Josué Medina', albumArt: 'https://ia601309.us.archive.org/17/items/folder_20250626_0504/folder.jpg', audioSrc: 'https://archive.org/download/05-quien-dijo-que-no/01%20-%20Tu%20Hijo%20Soy.mp3' },
  { id: 8, title: 'Yo No Se', artist: 'Josué Medina', albumArt: 'https://ia601309.us.archive.org/17/items/folder_20250626_0504/folder.jpg', audioSrc: 'https://archive.org/download/05-quien-dijo-que-no/02%20-%20Yo%20No%20Se.mp3' },
  { id: 9, title: 'Promesas', artist: 'Josué Medina', albumArt: 'https://ia601309.us.archive.org/17/items/folder_20250626_0504/folder.jpg', audioSrc: 'https://archive.org/download/05-quien-dijo-que-no/03%20-%20Promesas.mp3' },
  { id: 10, title: 'Rey', artist: 'Josué Medina', albumArt: 'https://ia601309.us.archive.org/17/items/folder_20250626_0504/folder.jpg', audioSrc: 'https://archive.org/download/05-quien-dijo-que-no/04%20-%20Rey.mp3' },
  { id: 11, title: 'Quien Dijo Que No', artist: 'Josué Medina', albumArt: 'https://ia601309.us.archive.org/17/items/folder_20250626_0504/folder.jpg', audioSrc: 'https://archive.org/download/05-quien-dijo-que-no/05%20-%20Quien%20Dijo%20Que%20No.mp3' },
];

export const INDEFINIDOS_TRACKS: Track[] = [
  { id: 12, title: 'Instantes', artist: 'iNDEFINIDOS', albumArt: 'https://f4.bcbits.com/img/0017813230_10.jpg', audioSrc: 'https://archive.org/download/i-ndefinidos-instantes/iNDEFINIDOS%20-%20Instantes.mp3' },
  { id: 13, title: 'Tertulia de erejes', artist: 'iNDEFINIDOS', albumArt: 'https://f4.bcbits.com/img/0017813230_10.jpg', audioSrc: 'https://archive.org/download/i-ndefinidos-instantes/iNDEFINIDOS%20-%20%20Tertulia%20de%20erejes.mp3' },
  { id: 14, title: 'Hipocresía', artist: 'iNDEFINIDOS', albumArt: 'https://f4.bcbits.com/img/0017813230_10.jpg', audioSrc: 'https://archive.org/download/i-ndefinidos-instantes/iNDEFINIDOS%20-%20Hipocres%C3%ADa.mp3' },
  { id: 15, title: 'Carlitos y Sofía', artist: 'iNDEFINIDOS', albumArt: 'https://f4.bcbits.com/img/0017813230_10.jpg', audioSrc: 'https://archive.org/download/i-ndefinidos-instantes/iNDEFINIDOS%20-%20Carlitos%20y%20Sof%C3%ADa.mp3' },
];


export const ALBUMS_DATA: Album[] = [
  {
    id: 1,
    title: 'Des Muda',
    artists: ['Nohemi'],
    imageUrl: 'https://dn721503.ca.archive.org/0/items/003_20250622_202506/004.jpg',
    advisory: false,
    tracks: NOHEMI_TRACKS,
    albumUrl: 'https://sites.google.com/view/desmuda/nohemi',
    buyUrl: 'https://tiendaguah.com/nohemi/des-muda',
  },
  {
    id: 2,
    title: 'Hijo del Rey',
    artists: ['Josué Medina'],
    imageUrl: 'https://ia601309.us.archive.org/17/items/folder_20250626_0504/folder.jpg',
    advisory: false,
    albumUrl: 'https://sites.google.com/view/josuemedina/hijo-del-rey',
    tracks: JOSUE_MEDINA_TRACKS,
    buyUrl: 'https://tiendaguah.com/josue-medina/hijo-del-rey',
  },
  {
    id: 3,
    title: 'iNDEFINIDOS',
    artists: ['iNDEFINIDOS'],
    imageUrl: 'https://f4.bcbits.com/img/0017813230_10.jpg',
    advisory: false,
    albumUrl: 'https://sites.google.com/view/indefinidos/indefinidos',
    tracks: INDEFINIDOS_TRACKS,
    buyUrl: 'https://tiendaguah.com/indefinidos/indefinidos',
  },
];
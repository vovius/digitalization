import { PersonalInfo } from "./personal-info.model";
import { Product } from "./product.model";

export class Order {
  id: string = 'test';
  personalInfo: PersonalInfo = {firstName: "fdasfa", name:"name", email: "email@fdsa"};
  coupon: string = "ets23";
  products: Product[];
  orderTotal?: number = 32;
  constructor(){
    this.personalInfo = new PersonalInfo();
    this.products = [];
  }
  /*
    products = [
      {
        id: 'spool',
        icon: 'assets/images/filmrolle.png',
        top: '10px',
        total: 0,
        details: [
          {
            id: 'DIG_F_S',
            amount: 0,
            name: 'selection.spools.spool',
            detail: 'selection.spools.spoolDetail1',
            quality: 'selection.spools.spoolQuality',
            price: 0,
            tooltipText1: 'selection.spools.infoSpoolFormats',
            tooltipText2: 'selection.spools.spoolExplanation1'
          },
          {
            id: 'DIG_F_M',
            amount: 0,
            name: 'selection.spools.spool',
            detail: 'selection.spools.spoolDetail2',
            quality: 'selection.spools.spoolQuality',
            price: 0,
            tooltipText1: 'selection.spools.infoSpoolFormats',
            tooltipText2: 'selection.spools.spoolExplanation2'
          },
          {
            id: 'DIG_F_L',
            amount: 0,
            name: 'selection.spools.spool',
            detail: 'selection.spools.spoolDetail3',
            quality: 'selection.spools.spoolQuality',
            price: 0,
            tooltipText1: 'selection.spools.infoSpoolFormats',
            tooltipText2: 'selection.spools.spoolExplanation3'
          }
        ]
      },
      {
        id: 'video',
        icon: 'assets/images/cassette.png',
        top: '2px',
        total: 0,
        details: [
          {
            id: 'DIG_V',
            amount: 0,
            name: 'selection.cassettes.cassettes',
            detail: '',
            quality: 'selection.cassettes.cassetteQuality',
            price: 0,
            tooltipText1: 'selection.cassettes.infoFormats',
            tooltipText2: ''
          }
        ]
      },
      {
        id: 'photo',
        icon: 'assets/images/bild.png',
        top: '5px',
        total: 0,
        details: [
          {
            id: 'DIG_P_SLD',
            amount: 0,
            name: 'selection.photos.slide',
            detail: '',
            quality: 'selection.photos.photoQuality3000',
            price: 0,
            tooltipText1: 'selection.photos.infoSlideFormats',
            tooltipText2: ''
          },
          {
            id: 'DIG_P_PAP',
            amount: 0,
            name: 'selection.photos.photo',
            detail: '',
            quality: 'selection.photos.photoQuality600',
            price: 0,
            tooltipText1: 'selection.photos.infoPhotoFormats',
            tooltipText2: ''
          },
          {
            id: 'DIG_P_NEG',
            amount: 0,
            name: 'selection.photos.negative',
            detail: '',
            quality: 'selection.photos.photoQuality3000',
            price: 0,
            tooltipText1: 'selection.photos.infoNegativeFormats',
            tooltipText2: ''
          },
          {
            id: 'DIG_P_ALB',
            amount: 0,
            name: 'selection.photos.albums',
            detail: '',
            quality: 'selection.photos.photoQuality600',
            price: 0,
            tooltipText1: 'selection.photos.infoAlbumFormats',
            tooltipText2: ''
          }
        ]
      }
    ];

    deliveryInfo = {
      id: '',
      language: 'de',//TODO: get from translation
      firstname: '',
      name: '',
      street: '',
      zip: '',
      city: '',
      mail: '',
      coupon: {
        code: ''
      },
      notes: '',
      returnOriginals: 'true',
      orderTotal: 0,
      discount: 0
    };*/
}

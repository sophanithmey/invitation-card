export interface ParentsInfo {
  groom_father?: string;
  groom_mother?: string;
  bride_father?: string;
  bride_mother?: string;
  groom_parents_kh?: string;
  bride_parents_kh?: string;
}

export interface GiftInfo {
  bank_name: string;
  account_name: string;
  account_number: string;
  qr_code_url: string;
  secondary_bank_name?: string;
  secondary_account_name?: string;
  secondary_account_number?: string;
  secondary_qr_code_url?: string;
}

export interface Accommodation {
  id: string;
  hotel_name: string;
  address: string;
  phone?: string;
  booking_url?: string;
}

export interface Transportation {
  id: string;
  pickup_location: string;
  pickup_time: string;
  description?: string;
}

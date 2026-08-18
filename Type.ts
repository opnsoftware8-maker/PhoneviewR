export type SaleStatus = "available" | "discontinued";
export type DeviceType = "phone" | "tablet";

export const CalcuGame = (
  performance: number,
  battery: number,
  display: number,
  thermal: number
) =>
  Math.round(
    performance * 0.45 + thermal * 0.25 + display * 0.15 + battery * 0.15
  );

export type PriceTier =
  | "entry"
  | "budget"
  | "entry-midrange"
  | "midrange"
  | "upper-midrange"
  | "high-end"
  | "flagship";

export type Phone = {
  name: string;
  brand: string;
  type: DeviceType;
  saleStatus: SaleStatus;
  priceTier: PriceTier;

  latestPrice: {
    defaultPrice: number;
    priceFrom: string;
  }; // 🔹 ปิดปีกกาให้ถูกต้อง

  chip: string;
  speaker: string;

  camera: {
    main: number; // MP
    ultrawide?: number; // MP
    telephoto?: number; // MP
    selfie: number; // MP
    video: string;
    ois: boolean;
    digitalZoom: number;
    opticalZoom?: number; // Optical Zoom
  };

  storageRam: {
    ram: number;
    storage: number;
    price: number;
  }[];

  display: string;
  battery: number;
  charge: {
    wired: number;
    wireless: number;
  };

  scores: {
    performance: number;
    gaming: number;
    battery: number;
    display: number;
    camera: number;
    value: number;
    thermal: number;
    overall: number;
  };

  recommended: {
    gaming: boolean;
    camera: boolean;
    durability: boolean;
    budget: boolean;
    performance: boolean;
    battery: boolean;
    entertainment: boolean;
  };

  pros: string[];
  cons: string[]; // 🔹 ลบตัวที่ซ้ำออก

  official: string;
  shopee?: string;
  lazada?: string;
  youtube?: string;
};
 string[];    
  cons: string[];         
  cons: string[];

  official: string;
  shopee?: string;                                        
  lazada?: string;
  youtube?: string;
};be?: string;
};: boolean
  };

  pros: string[];    
  cons: string[];         
  cons: string[];

  official: string;
  shopee?: string;                                        
  lazada?: string;
  youtube?: string;
};    lazada?: string;
  youtube?: string;
};
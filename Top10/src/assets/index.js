import bg from "./images/bg.png";
import HeadLogo from "./images/logo-03.png";
import fullLogo from "./images/logo-02.png";
import chain from "./images/chain2.jpg";
import keke from "./images/keke.jpg";
import crankshaft from "./images/crankshafthlx.png";
import chainNoBg from "./images/chain2-removebg.png";
import tire from "./images/noBgTire.png";
import blockTeethTyre from "./images/blocktyre.png";
import shelvedTyre from "./images/shelvetyre.png";
import sleeve from "./images/sleeve.png";
import shaft from "./images/kekeshaft.png";
import chainsaw from "./images/chainsaw.png";
import machines from "./images/machines.png"

const productData = [
  {
    id: 1,
    name: "Motorcycle Crankshaft - Bajaj Boxer 100",
    description:
      "High-performance crankshaft designed for durability and smooth engine operation.",
    priceUSD: 35,
    priceLRD: 6700,
    images: [
      crankshaft,
      "https://via.placeholder.com/80x80?text=Side+1",
      "https://via.placeholder.com/80x80?text=Side+2",
    ],
    specs: {
      Material: "Forged Steel",
      Weight: "2.3kg",
      Compatible: "Bajaj Boxer 100",
      Origin: "India",
    },
  },
  {
    id: 2,
    name: "Keke Air Filter - TVS King Deluxe",
    description:
      "Efficient filtration system to enhance keke engine longevity and performance.",
    priceUSD: 9,
    priceLRD: 1800,
    images: [
      shaft,
      "https://via.placeholder.com/80x80?text=Box",
      "https://via.placeholder.com/80x80?text=Back",
    ],
    specs: {
      Type: "Dual-layer Foam",
      Usage: "TVS King Deluxe",
      Origin: "China",
    },
  },
  {
    id: 3,
    name: "Powersaw Spark Plug - NGK",
    description:
      "Reliable spark plug for smooth ignition and maximum power output in chainsaws.",
    priceUSD: 3,
    priceLRD: 570,
    images: [
      chainsaw,
      "A complete Chainsaw",
      "https://via.placeholder.com/80x80?text=Label",
    ],
    specs: {
      Brand: "NGK",
      Model: "BPM7A",
      Use: "Powersaws",
      Origin: "Japan",
    },
  },
];

export default productData;

export {
  bg,
  HeadLogo,
  fullLogo,
  chain,
  keke,
  crankshaft,
  chainNoBg,
  tire,
  blockTeethTyre,
  shelvedTyre,
  sleeve,
  shaft,
  chainsaw,
  machines
};

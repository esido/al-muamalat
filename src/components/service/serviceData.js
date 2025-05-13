import management from "../../assets/icons/almuamalat_islamic_finance.svg";
import international from "../../assets/icons/almuamalat_international_relations.svg";
import education from "../../assets/icons/almuamalat_education_training.svg";
import bank from "../../assets/icons/almuamalat_islamic_bank.svg";
import market from "../../assets/icons/almuamalat_islamic_market.svg";
import audit from "../../assets/icons/almuamalat_islamic_audit.svg";

const services = [
  {
    id: 1,
    icon: management,
    title: "Islamic Fund Management",
    className: "management",
    description:
      "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
  },
  {
    id: 2,
    icon: international,
    className: "international",
    title: "International Relations",
    description:
      "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
  },
  {
    id: 3,
    icon: education,
    className: "education",
    title: "Education and Training",
    description:
      "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
  },
  {
    id: 4,
    icon: bank,
    className: "bank",
    title: "For Islamic Banks",
    description:
      "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
  },
  {
    id: 5,
    icon: market,
    className: "market",
    title: "Islamic Capital Market",
    description:
      "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
  },
  {
    id: 6,
    icon: audit,
    className: "audit",
    title: "Shariah Compliance Audit",
    description:
      "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
  },
];

export default services;

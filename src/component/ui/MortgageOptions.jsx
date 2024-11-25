import React from "react";

const MortgageOptions = () => {
  const sections = [
    {
      title: "Purchase Mortgage",
      description:
        "You need the help of a mortgage professional to make the right decisions.",
      items: [
        "Home Purchase Advice & Services",
        "Shop all the Banks",
        "Lowest Rates",
        "Self-employed / New to Canada",
        "Lower your monthly payments",
      ],
    },
    {
      title: "Mortgage Renewals",
      description:
        "Most homeowners simply sign the lender's renewal without shopping for the best rate and terms.",
      items: [
        "We shop for you, no charge",
        "No cost switch program",
        "Canada's best prepayment options",
      ],
    },
    {
      title: "Mortgage Refinance",
      description: "Mortgage refinance can prove beneficial in several ways.",
      items: [
        "Get cash out for any purpose",
        "Consolidate high interest credit cards",
        "Lower your monthly payments",
        "Renovations and home improvements",
        "Programs for self-employed",
        "Canada's best prepayment options",
      ],
    },
    {
      title: "Home Equity Loans",
      description:
        "You need the help of a mortgage professional to make the right decisions.",
      items: [
        "Many programs to help you",
        "Easy access to low interest loans",
        "Start a new business",
        "Renovations and home improvements",
        "Education, Invest for retirement",
        "Canada's best prepayment options",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      {sections.map((section, index) => (
        <div key={index} className="">
          <h2 className="text-4xl font-extralight text-black mb-2 border-b-2 border-gray-400 pb-4">
            {section.title}
          </h2>
          <p className="text-gray-600 mb-3">{section.description}</p>
          <ul className="list-disc pl-5 text-gray-800">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MortgageOptions;

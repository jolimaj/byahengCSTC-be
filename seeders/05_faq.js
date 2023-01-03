module.exports = (sequelize, Sequelize) => {
  const Faq = sequelize.define("faq", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
    },
    question: {
      type: Sequelize.STRING,
    },
    answer: {
      type: Sequelize.TEXT,
    },
  });

  Faq.bulkCreate([
    {
      userID: 1,
      question: "What is CSTC?",
      answer:
        "CSTC’s Philosophy is anchored on the fundamental principle of the institutions’ Founder, President and CEO, Nelson D. Mendoza, Ph.D. to with '“'Believing in anything is the first step in making things possible.'”'CSTC envision to become a top transformational learning community and center of excellence for academic proficiency, intellectual learning, technical competency and professional expertise.",
    },
    {
      userID: 1,
      question: "What are the degree and non degree courses offered by CSTC?",
      answer:
        "The courses offered by CSTC is BSEd, Bachelor in SECONDARY EDUCATION BTVTEd, Bachelor of TECHNICAL-VOCATIONAL TEACHER EDUCATION BECEd, Bachelor of EARLY CHILDHOOD EDUCATION BCAEd, Bachelor of CULTURE AND ARTS EDUCATION BPE, Bachelor of PHYSICAL EDUCATION BTLE, Bachelor of TECHNOLOGY AND LIVELIHOOD EDUCATION BSIT, Bachelor of Science in INFORMATION TECHNOLOGY ACT, Associate in COMPUTER TECHNOLOGY BSBA, Bachelor of Science IN BUSINESS ADMINISTRATION BSOA, Bachelor of Science IN OFFICE ADMINISTRATION BSAIS, Bachelor of Science IN ACCOUNTING INFORMATION SYSTEM.",
    },
    {
      userID: 1,
      question: "What are the degree and non degree courses offered by CSTC?",
      answer:
        "The courses offered by CSTC is BSEd-Bachelor in SECONDARY EDUCATION, BTVTEd-Bachelor of TECHNICAL-VOCATIONAL TEACHER EDUCATION, BECEd-Bachelor of EARLY CHILDHOOD EDUCATION, BCAEd-Bachelor of CULTURE AND ARTS EDUCATION, BPE-Bachelor of PHYSICAL EDUCATION, BTLE-Bachelor of TECHNOLOGY AND LIVELIHOOD EDUCATION, BSIT-Bachelor of Science in INFORMATION TECHNOLOGY, ACT-Associate in COMPUTER TECHNOLOGY, BSBA-Bachelor of Science IN BUSINESS ADMINISTRATION, BSOA-Bachelor of Science IN OFFICE ADMINISTRATION, BSAIS-Bachelor of Science IN ACCOUNTING INFORMATION SYSTEM, BSA, Bachelor of Science in ACCOUNTANCY, BSP-Bachelor of Science in PSYCHOLOGY, BHS-Bachelor in HUMAN SERVICES (Formerly Human Resource Services), BSHM-Bachelor of Science in HOSPITALITY MANAGEMENT, BSTM-Bachelor of SCIENCE in TOURISM MANAGEMENT.",
    },
    {
      userID: 1,
      question: "What are the degree and non degree courses offered by CSTC?",
      answer:
        "The courses offered by CSTC is BSEd-Bachelor in SECONDARY EDUCATION, BTVTEd-Bachelor of TECHNICAL-VOCATIONAL TEACHER EDUCATION, BECEd-Bachelor of EARLY CHILDHOOD EDUCATION, BCAEd-Bachelor of CULTURE AND ARTS EDUCATION, BPE-Bachelor of PHYSICAL EDUCATION, BTLE-Bachelor of TECHNOLOGY AND LIVELIHOOD EDUCATION, BSIT-Bachelor of Science in INFORMATION TECHNOLOGY, ACT-Associate in COMPUTER TECHNOLOGY, BSBA-Bachelor of Science IN BUSINESS ADMINISTRATION, BSOA-Bachelor of Science IN OFFICE ADMINISTRATION, BSAIS-Bachelor of Science IN ACCOUNTING INFORMATION SYSTEM, BSA, Bachelor of Science in ACCOUNTANCY, BSP-Bachelor of Science in PSYCHOLOGY, BHS-Bachelor in HUMAN SERVICES (Formerly Human Resource Services), BSHM-Bachelor of Science in HOSPITALITY MANAGEMENT, BSTM-Bachelor of SCIENCE in TOURISM MANAGEMENT. Technical Vocational Education and Training Courses, Tourism, Housekeeping NC III, Bartending NC II, Bread and Pastry Production NC II, Cookery NC IIFood and Beverage NC II, Food and Beverage Services NC III, Bartending NC II, Event Management Services NC III,* WHOLESALE AND RETAIL TRADING Customer Services NC II*, *SOCIAL COMMUNITY DEVELOPMENT AND OTHER SERVICES Bookkeeping NC III,Beauty Care NC II*, *METAL & ENGINEERING SMAW NC 1,SMAW NC II,SMAW NC III*, *CONSTRUCTION PV SYSTEM INSTALLATION NC II*,*ELECTRICAL & ELECTRONICS Electrical Installation and Maintenance NC II,Electrical Installation and Maintenance NC III,Electronic Product Assembly Servicing NC II,Consumer Electronic Servicing NC III*, *HUMAN HEALTH / HEALTH CAR Hilot (Wellness Massage) NC II*,*GARMENT Dressmaking NC II**AUTOMOTIVE & LAND TRANSPORTATIO Automotive Servicing NC, Automotive Servicing NC ll*",
    },
    {
      userID: 1,
      question:
        "Does CSTC offers program for Senior highschool students? If yes what are the tracks and programs offered by each campus?",
      answer:
        "GENERAL ACADEMIC STRAND (GAS), HUMANITIES AND SOCIAL SCIENCES (HUMMS), ACCOUNTANCY, BUSINESS AND MANAGEMENT (ABM), SCIENCE, TECHNOLOGY, ENGINEERING AND MATHEMATICS (STEM), TECHNICAL VOCATIONAL & LIVELIHOOD (TVL), HOME ECONOMICS (HE), INDUSTRIAL ARTS (Electrical, Automotive, Welding Technology), INFORMATION AND COMMUNICATION TECHNOLOGY (ICT)",
    },
    {
      userID: 1,
      question: "How much is the tuition?",
      answer: "The tuition is based on what strand or course you take.",
    },
    {
      userID: 1,
      question: "What are the school hours?",
      answer:
        "The school hours of the school is class starts at 8am and it ends at 4 or 5 pm and it depends on their subjects.",
    },
    {
      userID: 1,
      question: "Does the school enforce a dress code?",
      answer:
        "Yes, CSTC provides students school uniform depends of what courses they take.",
    },
    {
      userID: 1,
      question: "What are the Requirements for the incoming college?",
      answer:
        "Grade 12 Report Card, Good Moral Character, PSA Birth certificate, LongBand Brown Envelope",
    },
    {
      userID: 1,
      question: "What are the Requirements for the Transferee?",
      answer:
        "Transcript of Records/ Copy of Grades ,Honorable Dismissal , PSA Birth certificate , Long Brown Envelope",
    },
    {
      userID: 1,
      question: "What is ByahengCSTC system?",
      answer:
        "ByahengCSTC system is a website that will provide pre-enrollment for the students, CSTC information , CSTC contact, CSTC FAQ and 3D Virtual Tour.",
    },
    {
      userID: 1,
      question: "ByahengCSTC can access using Android Phones?",
      answer: "No, this system can only access in computer and laptop.",
    },
    {
      userID: 1,
      question: "What is ByahengCSTC Virtual Tour?",
      answer:
        "The ByahengCSTC is a combination of (3D) Three Dimension Virtual tour where you can explore the three campuses of CSTC which is Sariaya Main Campus, Lucena and Atimonan through online and you can see the actual appearance of the inside of the campus by using the virtual campus Tour.",
    },
    {
      userID: 1,
      question: "How does this Virtual campus tour work?",
      answer:
        "This virtual campus tour consists of 3d models where you will simulate the actual appearance of each campus of the institution and bring it closer to a software and use rendering to make it look realistic when it comes to the online platform.",
    },
    {
      userID: 1,
      question: "How is this Virtual Campus used?",
      answer:
        "* You need to follow these steps :Enter the website and register,Press the Tour button,Choose which of the three Campuses you wish to explore,Use the provided navigation buttons to control the direction and access each facility within the virtual tour",
    },
    {
      userID: 1,
      question:
        "Is it possible to take a virtual campus tour even if not studying or part of the institution of CSTC?",
      answer:
        "The Developer provides a Guest feature where you can still visit and explore the campuses of CSTC and you can also use other features of the ByahengCSTC website through online.This website was created to help users become more familiar with CSTC’s approach and facilities and for potential investors and those who plan to continue their journey in CSTC’s institution.",
    },
  ]);
  return Faq;
};

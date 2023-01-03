module.exports = (sequelize, Sequelize) => {
  const Courses = sequelize.define("courses", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    courseCode: {
      type: Sequelize.STRING,
    },
    slot: {
      type: Sequelize.INTEGER,
    },
  });
  Courses.bulkCreate([
    {
      userID: 1,
      name: "Bachelor of TECHNICAL-VOCATIONAL TEACHER EDUCATION",
      courseCode: "BTVTEd",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of EARLY CHILDHOOD EDUCATION",
      courseCode: "BECEd",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of CULTURE AND ARTS EDUCATION",
      courseCode: "BCAEd",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of PHYSICAL EDUCATION",
      courseCode: "BPE",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of TECHNOLOGY AND LIVELIHOOD EDUCATION",
      courseCode: "BTLE",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of Science in INFORMATION TECHNOLOGY",
      courseCode: "BSIT",
      slot: 100,
    },
    {
      userID: 1,
      name: "Associate in COMPUTER TECHNOLOGY",
      courseCode: "ACT",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of Science IN BUSINESS ADMINISTRATION",
      courseCode: "BSBA",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of Science IN OFFICE ADMINISTRATION",
      courseCode: "BSOA",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of Science IN ACCOUNTING INFORMATION SYSTEM",
      courseCode: "BSAIS",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of Science in ACCOUNTANCY",
      courseCode: "BSA",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of Science in PSYCHOLOGY",
      courseCode: "BSP",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor in HUMAN SERVICES (Formerly Human Resource Services)",
      courseCode: "BHS",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of Science in HOSPITALITY MANAGEMENT",
      courseCode: "BSHM",
      slot: 100,
    },
    {
      userID: 1,
      name: "Bachelor of SCIENCE in TOURISM MANAGEMENT",
      courseCode: "BSTM",
      slot: 100,
    },
    {
      userID: 1,
      name: "GENERAL ACADEMIC STRAND",
      courseCode: "GAS",
      slot: 100,
    },
    {
      userID: 1,
      name: "HUMANITIES AND SOCIAL SCIENCES",
      courseCode: "HUMMS",
      slot: 100,
    },
    {
      userID: 1,
      name: "ACCOUNTANCY, BUSINESS AND MANAGEMENT",
      courseCode: "ABM",
      slot: 100,
    },
    {
      userID: 1,
      name: "SCIENCE, TECHNOLOGY, ENGINEERING AND MATHEMATICS",
      courseCode: "STEM",
      slot: 100,
    },
    {
      userID: 1,
      name: "TECHNICAL VOCATIONAL & LIVELIHOOD",
      courseCode: "TVL",
      slot: 100,
    },
    {
      userID: 1,
      name: "HOME ECONOMICS",
      courseCode: "HE",
      slot: 100,
    },
    {
      userID: 1,
      name: "INDUSTRIAL ARTS (Electrical, Automotive, Welding Technology)",
      courseCode: "IA",
      slot: 100,
    },
    {
      userID: 1,
      name: "INFORMATION AND COMMUNICATION TECHNOLOGY",
      courseCode: "ICT",
      slot: 100,
    },
  ]);
  return Courses;
};

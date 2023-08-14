const servicesWhoWeAre = require("../services/servicesWhoWeAre");

async function getWhoWeAre(req, res) {
  try {
    let allCoures = await servicesWhoWeAre.getAllWhoWeAre();
    if (allCoures) {
      res.status(200).json(allCoures);
    } else {
      res.status(404).json({ message: "Not couses Foud" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}


module.exports = {
  getWhoWeAre,

};

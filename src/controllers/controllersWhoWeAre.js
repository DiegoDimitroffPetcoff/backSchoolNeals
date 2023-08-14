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

async function postWhoWeAre(req, res) {
  try {
    let allWhoWeAre = await servicesWhoWeAre.postWhoWeAre(req.body);
    if (allWhoWeAre) {
      res.status(200).json(allWhoWeAre);
    } else {
      res.status(404).json({ message: "Module not Founded" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function editeWhoWeAre(req, res) {
  try {
    let WhoWeAreEdited = await servicesWhoWeAre.editeWhoWeAre(
      req.params.id,
      req.body
    );
    if (WhoWeAreEdited) {
      res.status(200).json(WhoWeAreEdited);
    } else {
      res.status(404).json({ message: "Information not Foud to Edite" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getWhoWeAre,
  postWhoWeAre,
  editeWhoWeAre

};

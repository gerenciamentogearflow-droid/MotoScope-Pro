import { shinerayModels } from "./src/data/shinerayModels";
import { hondaParameters } from "./src/data/hondaParameters";
import { yamahaParameters } from "./src/data/yamahaParameters";

const checkModels = (models, name) => {
  const bad = models.filter(m => !m || !m.name || !m.tables);
  console.log(`${name} bad:`, bad.length);
};

checkModels(shinerayModels, "Shineray");
checkModels(hondaParameters, "Honda");
checkModels(yamahaParameters, "Yamaha");

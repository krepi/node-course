import elementService from "../services/elementService.js";

class ElementController {
    async getAllElements(req, res) {
        try {
            const elements = await elementService.getAllElements();
            res.status(200).json(elements)
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}

export default ElementController;
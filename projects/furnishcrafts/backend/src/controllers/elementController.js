import elementService from "../services/elementService.js";

class ElementController {
    /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
     getAllElements = async (req, res) => {
        try {
            const elements = await elementService.getAllElements();
            res.status(200).json(elements)
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
     getElementById = async (req, res) => {
        try{
            const {id} = req.params;
            const element = await elementService.getElementById(parseInt(id, 10));
            res.status(200).json(element);
        } catch (error){
            res.status(400).json({message: error.message});
        }
    }
}

export default ElementController;
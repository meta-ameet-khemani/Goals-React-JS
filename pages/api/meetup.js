import dbConnect from "../../lib/dbConnect";
import Meetup from "../../models/Meetup";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const meetups = await Meetup.find({});
        res.status(200).json({ success: true, data: meetups });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const meetup = await Meetup.create(req.body);
        res.status(201).json({ success: true, data: meetup });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;

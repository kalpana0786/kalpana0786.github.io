const Guest = require('../models/Guest');

exports.getGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.status(200).json(guests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createGuest = async (req, res) => {
  try {
    const guest = await Guest.create(req.body);
    res.status(201).json(guest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getGuestById = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);
    if (!guest) return res.status(404).json({ error: 'Guest not found' });
    res.status(200).json(guest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateGuest = async (req, res) => {
  try {
    const guest = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(guest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteGuest = async (req, res) => {
  try {
    const deletedGuest = await Guest.findByIdAndDelete(req.params.id);
    if (!deletedGuest) {
      return res.status(404).json({ error: 'Guest not found' });
    }
    res.status(200).json({ message: 'Guest deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

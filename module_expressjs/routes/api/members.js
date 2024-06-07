const express       = require("express");
const uuid          = require("uuid");
const members       = require("../../Members")

const router =      express.Router();

// Gets all members
router.get("/", (req, res) => res.json(members));

// Get single member
router.get("/:id", (req, res) => {
    const foundMember = members.some(member => member.id === parseInt(req.params.id));
    if (foundMember)
    {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else
    {
        res.status(400).json({ msg: `No member with the id of ${req.params.id} found.` });
    }
});

// Create member
router.post("/", (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }

    if(!newMember.name || !newMember.email)
    {
       return res.status(400).json({ msg: "Please include a name and an email" });
    }
    members.push(newMember);
    // res.json(members);
    res.redirect("/");
});

// Update member
router.put("/:id", (req, res) => {
    const foundMember = members.some(member => member.id === parseInt(req.params.id));
    if (foundMember)
    {
        const updateMember = req.body;
        for (const memberEntry of members)
        {
            if (!memberEntry.id === parseInt(req.params.id)){ continue; }

            memberEntry.name = updateMember.name ? updateMember.name : memberEntry.name;
            memberEntry.email = updateMember.email ? updateMember.email : memberEntry.email;

            res.json({ msg: "Member updated", memberEntry });
        }
    }
    else
    {
        res.status(400).json({ msg: `No member with the id of ${req.params.id} found.` });
    }
});

// Delete member 
router.delete("/:id", (req, res) => {
    const foundMember = members.some(member => member.id === parseInt(req.params.id));
    if (foundMember)
    {
        res.json({ 
            msg:"Member deleted", 
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    }
    else
    {
        res.status(400).json({ msg: `No member with the id of ${req.params.id} found.` });
    }
});

module.exports = router;
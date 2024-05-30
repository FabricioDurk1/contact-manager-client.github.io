using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using ContactManagerAPI.Models;

namespace ContactManagerAPI.Controllers
{
    [Route("api/controller")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private static List<Contact> contacts = new List<Contact>
        {
            new Contact { Id = 1, Name = "John Doe", Email = "john.doe@example.com", Phone = "123456789" },
            new Contact { Id = 2, Name = "Jane Smith", Email = "jane.smith@example.com", Phone = "987654321" }
        };

        [HttpGet]
        public IActionResult GetContacts()
        {
            return Ok(contacts);
        }

        [HttpGet("{id}")]
        public IActionResult GetContact(int id)
        {
            var contact = contacts.FirstOrDefault(c => c.Id == id);
            if (contact == null)
            {
                return NotFound();
            }
            return Ok(contact);
        }

        [HttpPost]
        public IActionResult CreateContact(Contact contact)
        {
            contact.Id = contacts.Count + 1;
            contacts.Add(contact);
            return CreatedAtAction(nameof(GetContact), new { id = contact.Id }, contact);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateContact(int id, Contact updatedContact)
        {
            var contact = contacts.FirstOrDefault(c => c.Id == id);
            if (contact == null)
            {
                return NotFound();
            }
            contact.Name = updatedContact.Name;
            contact.Email = updatedContact.Email;
            contact.Phone = updatedContact.Phone;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            var contact = contacts.FirstOrDefault(c => c.Id == id);
            if (contact == null)
            {
                return NotFound();
            }
            contacts.Remove(contact);
            return NoContent();
        }
    }
}

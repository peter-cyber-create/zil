import { getAllContacts } from "@/app/actions/dashboard";
import RespondForm from "@/components/RespondForm";
import Link from "next/link";
import { FaEnvelope, FaTachometerAlt } from "react-icons/fa";
import LogoutButton from "@/components/LogoutButton";
import { Contact } from "@/types/dashboard";

// Force dynamic rendering to prevent database calls during build
export const dynamic = 'force-dynamic';

export default async function ContactsPage() {
  const contacts = await getAllContacts();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white">
      <nav className="sticky top-0 z-30 w-full bg-gradient-to-r from-[#232526] to-[#0f2027] backdrop-blur shadow flex items-center justify-between px-0 md:px-10 py-4 mb-10 border-b border-[#2c5364]">
        <div className="flex items-center gap-3 pl-2 md:pl-0">
          <FaTachometerAlt className="text-[#00c6ff] text-2xl" />
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white drop-shadow">Contacts</span>
        </div>
        <div className="flex items-center gap-4 md:gap-8 pr-2 md:pr-0">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#00c6ff] hover:text-[#fff] transition"><FaTachometerAlt /> Dashboard</Link>
          <LogoutButton />
        </div>
      </nav>
      <main className="w-full md:max-w-5xl md:mx-auto px-0 md:px-6 mt-10">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-3 text-[#00c6ff] drop-shadow mb-8 pl-2 md:pl-0">
          <FaEnvelope className="text-[#00c6ff]" /> Contact Submissions
        </h1>
        <ul className="space-y-4 md:space-y-6 overflow-y-auto max-h-[70vh] pr-0 md:pr-2 w-full">
          {contacts.length === 0 && <li className="text-gray-400 text-lg pl-2 md:pl-0">No contacts yet.</li>}
          {contacts.map((contact: Contact) => (
            <li key={contact.id} className="w-full bg-[#232526] rounded-none md:rounded-xl shadow p-2 md:p-6 flex flex-col border border-[#00c6ff]/10">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 font-bold text-white text-base md:text-lg">
                <span>{contact.name}</span>
                <span className="text-xs md:text-sm text-gray-300">({contact.email})</span>
                {contact.responded ? <span className="text-green-400 ml-0 md:ml-1">Responded</span> : <span className="text-yellow-400 ml-0 md:ml-1">Awaiting response</span>}
              </div>
              <div className="text-sm md:text-base text-gray-200 mb-2">{contact.message}</div>
              {contact.responded ? (
                <div className="text-green-400 text-xs md:text-sm">Responded: {contact.response}</div>
              ) : (
                <RespondForm id={contact.id} type="contact" />
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
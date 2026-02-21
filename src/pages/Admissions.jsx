import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { feeTable } from '../data/schoolData';
import { FaFilePdf, FaClipboardList, FaIdCard, FaUser } from 'react-icons/fa';

const initialForm = {
    studentName: '', dob: '', classApplying: '', parentName: '',
    phone: '', email: '', address: '', prevSchool: '',
};

export default function Admissions() {
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm(initialForm);
    };

    return (
        <main className="pt-20">
            <div className="bg-gradient-to-br from-primary-dark to-primary py-16 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-xs font-bold tracking-widest text-gold uppercase mb-3 block">Join VCA</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Admissions 2026–27</h1>
                    <p className="text-white/75 text-base max-w-2xl mx-auto">
                        Enroll your child at Virat Children Academy. Seats are limited — apply early!
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                        <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-white text-primary font-bold text-sm rounded-lg hover:bg-gray-100 transition-colors">
                            <FaFilePdf /> Download Prospectus
                        </a>
                        <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-bold text-sm rounded-lg hover:bg-accent-dark transition-colors">
                            <FaFilePdf /> Fee Structure PDF
                        </a>
                    </div>
                </div>
            </div>

            {/* Admission Procedure + Documents + Age */}
            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {/* Procedure */}
                        <div className="card-base p-7">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                                <FaClipboardList className="text-primary text-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4">Admission Procedure</h3>
                            <ol className="space-y-3">
                                {[
                                    'Collect or download the application form',
                                    'Fill form with required details',
                                    'Attach all required documents',
                                    'Submit form at school office',
                                    'Appear for entrance test / interview',
                                    'Pay admission & first term fee',
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                                        <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Documents */}
                        <div className="card-base p-7">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                                <FaIdCard className="text-accent text-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4">Required Documents</h3>
                            <ul className="space-y-2.5">
                                {[
                                    'Birth Certificate / Aadhar Card',
                                    'Previous School Transfer Certificate',
                                    'Previous Class Mark Sheet',
                                    'Passport Size Photographs (4)',
                                    'Parent / Guardian Aadhar Copy',
                                    'Caste Certificate (if applicable)',
                                    'Medical Fitness Certificate',
                                    'Migration Certificate (for Board classes)',
                                ].map((doc) => (
                                    <li key={doc} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="text-accent mt-0.5">•</span> {doc}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Age Criteria */}
                        <div className="card-base p-7">
                            <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-5">
                                <FaUser className="text-gold text-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4">Age Criteria</h3>
                            <ul className="space-y-3">
                                {[
                                    { cl: 'Nursery', age: '2.5 – 3.5 years' },
                                    { cl: 'LKG / KG', age: '3.5 – 4.5 years' },
                                    { cl: 'Class I', age: '5 – 6 years' },
                                    { cl: 'Class VI', age: '10 – 11 years' },
                                    { cl: 'Class IX', age: '13 – 15 years' },
                                    { cl: 'Class XI', age: '15 – 17 years' },
                                ].map((item) => (
                                    <li key={item.cl} className="flex justify-between text-sm">
                                        <span className="text-gray-600 font-medium">{item.cl}</span>
                                        <span className="text-primary font-semibold text-xs bg-primary-50 px-2 py-0.5 rounded-full">{item.age}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fee Table */}
            <section className="section-pad section-alt">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle tag="Fee Structure" title="Class-wise Annual Fee 2026–27" center />
                    <div className="card-base overflow-hidden mt-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold">Class / Level</th>
                                        <th className="px-6 py-4 text-center font-semibold">Annual Fee</th>
                                        <th className="px-6 py-4 text-center font-semibold">Monthly</th>
                                        <th className="px-6 py-4 text-center font-semibold">Admission Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feeTable.map((row, i) => (
                                        <tr key={row.class} className={`border-b border-gray-100 hover:bg-primary-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                                            <td className="px-6 py-4 font-semibold text-primary">{row.class}</td>
                                            <td className="px-6 py-4 text-center text-gray-700">{row.annual}</td>
                                            <td className="px-6 py-4 text-center text-gray-700">{row.monthly}</td>
                                            <td className="px-6 py-4 text-center text-accent font-semibold">{row.admission}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 bg-amber-50 border-t border-amber-100">
                            <p className="text-amber-700 text-xs">* Fee may be revised. Please contact the school office for the latest fee structure. Hostel charges are separate.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Online Admission Form */}
            <section className="section-pad">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <SectionTitle tag="Apply Online" title="Online Admission Form" center />
                    {submitted && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm text-center font-semibold">
                            ✅ Application submitted successfully! We will contact you shortly.
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="card-base p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            { name: 'studentName', label: 'Student Name *', type: 'text', required: true, col: 2 },
                            { name: 'dob', label: 'Date of Birth *', type: 'date', required: true, col: 1 },
                            { name: 'classApplying', label: 'Class Applying For *', type: 'select', required: true, col: 1 },
                            { name: 'parentName', label: 'Parent / Guardian Name *', type: 'text', required: true, col: 1 },
                            { name: 'phone', label: 'Contact Number *', type: 'tel', required: true, col: 1 },
                            { name: 'email', label: 'Email Address', type: 'email', required: false, col: 2 },
                            { name: 'address', label: 'Residential Address *', type: 'text', required: true, col: 2 },
                            { name: 'prevSchool', label: 'Previous School Name', type: 'text', required: false, col: 2 },
                        ].map((field) => (
                            <div key={field.name} className={field.col === 2 ? 'sm:col-span-2' : ''}>
                                <label className="block text-xs font-semibold text-gray-600 mb-1.5">{field.label}</label>
                                {field.type === 'select' ? (
                                    <select
                                        name={field.name}
                                        value={form[field.name]}
                                        onChange={handleChange}
                                        required={field.required}
                                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white transition-colors"
                                    >
                                        <option value="">Select Class</option>
                                        {['Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI (Arts)', 'Class XI (Science)', 'Class XII (Arts)', 'Class XII (Science)'].map((c) => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={form[field.name]}
                                        onChange={handleChange}
                                        required={field.required}
                                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                )}
                            </div>
                        ))}
                        <div className="sm:col-span-2">
                            <button type="submit" className="w-full py-3.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-colors duration-200 shadow-md hover:shadow-lg">
                                Submit Application →
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-3">
                                For queries, call us at <a href="tel:+919571133669" className="text-primary font-semibold">95711-33669</a>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

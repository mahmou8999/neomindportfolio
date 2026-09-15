import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 border-t border-slate-900 bg-slate-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز للبدء معنا؟</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            دعنا نناقش تفاصيل مشروعك القادم ونحول رؤيتك إلى حقيقة ناجحة. فريقنا جاهز للرد على استفساراتكم.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400"><Mail size={20} /></div>
                                <span>contact@neomind.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400"><Phone size={20} /></div>
                                <span>+20 123 456 7890</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400"><MapPin size={20} /></div>
                                <span>القاهرة، مصر</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                        <form onSubmit={(e) => { e.preventDefault(); alert('تم إرسال رسالتك بنجاح!'); }} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                                <input type="text" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition" placeholder="محمد أحمد" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                                <input type="email" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition" placeholder="name@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">تفاصيل المشروع</label>
                                <textarea rows="4" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition" placeholder="أخبرنا عن مشروعك..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-indigo-600/25">
                                إرسال الطلب
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
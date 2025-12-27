"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// @ts-ignore
import Image from "next/image"
// @ts-ignore
import { Shield, AlertTriangle, Lock, Users, Activity, CheckCircle2, ArrowRightCircle } from "lucide-react"

export default function PDNInfoSystem() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen font-sans bg-background selection:bg-primary/10">
      <style dangerouslySetInnerHTML={{__html: `
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .scroll-animate.show {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-animate-delay-1 {
          transition-delay: 0.1s;
        }
        .scroll-animate-delay-2 {
          transition-delay: 0.2s;
        }
        .scroll-animate-delay-3 {
          transition-delay: 0.3s;
        }
        .scroll-animate-delay-4 {
          transition-delay: 0.4s;
        }
      `}} />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="font-bold text-xl tracking-tighter">CYBER ANALYSIS</span>
          </div>
        
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dark-cyber-security-background-with-digital-data-p.jpg"
            alt="Cyber Security Background"
            fill
            className="object-cover opacity-20 dark:opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Activity className="w-3 h-3" />
            STUDI KASUS CYBER SECURITY 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Analisis Serangan Ransomware <br />
            <span className="text-primary">Pusat Data Nasional</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            Insiden ransomware Brain Cipher yang melumpuhkan infrastruktur digital
            nasional Indonesia.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted flex justify-center p-1">
            <div className="w-1 h-2 bg-muted rounded-full" />
          </div>
        </div>
      </section>

      {/* Latar Belakang */}
      <section id="latar-belakang" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border scroll-animate">
              <Image
                src="foto1.jpeg"
                alt="PDN Server Room"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            <div className="scroll-animate scroll-animate-delay-2">
              <h3 className="text-4xl font-bold mb-6 tracking-tight">Krisis Digital Juni 2024</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Pusat Data Nasional (PDN) di Surabaya yang dikelola Kominfo mengalami serangan siber berupa ransomware
                jenis <strong>Brain Cipher</strong> (varian LockBit 3.0) sejak 20 Juni 2024. Serangan ini melumpuhkan
                sedikitnya 210 basis data milik instansi pusat dan daerah.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Gangguan signifikan terjadi pada layanan imigrasi di berbagai bandara internasional serta sistem
                perizinan kementerian. Sebagai langkah darurat, Ditjen Imigrasi memindahkan data ke layanan cloud pihak
                ketiga (AWS) guna memulihkan pelayanan publik.
              </p>
              <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl border">
                <AlertTriangle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Status Tebusan</h4>
                  <p className="text-sm text-muted-foreground">
                    Pemerintah Indonesia dengan tegas menolak membayar tebusan sebesar US$8 juta dan fokus pada
                    pemulihan serta investigasi forensik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dampak & Pembahasan */}
      <section id="analisis" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <h3 className="text-4xl font-bold mb-6 tracking-tight">Dampak Serangan</h3>
            <p className="text-lg text-muted-foreground">
              Serangan ini menimbulkan berbagai dampak serius yang menyoroti kerentanan infrastruktur digital
              pemerintahan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Layanan Publik",
                desc: "Gangguan masif pada layanan imigrasi, perizinan, dan administrasi kependudukan.",
                icon: Users,
              },
              {
                title: "Kepercayaan Publik",
                desc: "Turunnya kepercayaan masyarakat terhadap keamanan sistem digital pemerintah Indonesia.",
                icon: Shield,
              },
              {
                title: "Kerugian Operasional",
                desc: "Kerugian operasional dan waktu yang signifikan akibat penghentian sistem secara total.",
                icon: Activity,
              },
              {
                title: "Risiko Kebocoran",
                desc: "Risiko tinggi kebocoran data sensitif meskipun pemerintah menyatakan fokus pada pemulihan.",
                icon: Lock,
              },
            ].map((item, i) => (
              <Card key={i} className={`border-none shadow-sm hover:shadow-md transition-shadow scroll-animate scroll-animate-delay-${i + 1}`}>
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Penyebab */}
      <section id="penyebab" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 scroll-animate">
              <h3 className="text-4xl font-bold mb-6 tracking-tight">Penyebab Kegagalan Sistem</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Serangan ransomware pada PDNS merupakan akumulasi dari berbagai kelemahan teknis dan nonteknis yang
                fatal dalam pengelolaan keamanan siber.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4 scroll-animate scroll-animate-delay-2">
              {[
                {
                  title: "Tidak Adanya Sistem Backup Data yang Andal (Offline Backup)",
                  content:
                    "Salah satu penyebab paling krusial adalah tidak adanya air-gapped backup yang terisolasi. Ketika ransomware mengenkripsi data utama, backup yang terhubung langsung juga tidak dapat digunakan, melumpuhkan opsi pemulihan cepat.",
                },
                {
                  title: "Lemahnya Pengamanan Infrastruktur Server",
                  content:
                    "Penggunaan sistem operasi yang tidak diperbarui (unpatched) dan konfigurasi keamanan server yang kurang ketat (misconfiguration) memberikan peluang bagi penyerang mengeksploitasi celah keamanan publik.",
                },
                {
                  title: "Minimnya Pemantauan Keamanan Secara Real-Time",
                  content:
                    "Tidak terdeteksinya aktivitas mencurigakan sejak tahap awal (akses awal, eskalasi hak akses) mengindikasikan lemahnya sistem pemantauan real-time seperti SIEM, IDS/IPS, dan SOC yang aktif 24/7.",
                },
                {
                  title: "Tata Kelola Keamanan Siber yang Belum Matang",
                  content:
                    "Kurangnya koordinasi yang jelas mengenai pembagian tanggung jawab antara kementerian, pengelola pusat data, dan vendor pihak ketiga menyebabkan tidak adanya otoritas teknis yang memastikan kesiapan keamanan.",
                },
                {
                  title: "Kurangnya Kesiapan Menghadapi Serangan Ransomware",
                  content:
                    "Rendahnya kesiapan terlihat dari prosedur tanggap insiden (incident response) yang belum optimal dan minimnya simulasi serangan (cyber drill), sehingga respons menjadi reaktif dan lambat.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6 bg-secondary/30">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Mitigasi */}
      <section id="mitigasi" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="scroll-animate">
            
              <h3 className="text-4xl font-bold mb-8 tracking-tight text-white">Langkah Pemulihan & Pencegahan</h3>

              {/* Mitigasi yang Telah Dilakukan */}
              <div className="mb-12">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  Mitigasi Pasca Serangan (Telah Dilakukan)
                </h4>
                <ul className="space-y-4 text-white/80">
                  <li className="flex gap-3">
                    <span className="font-bold text-white">•</span>
                    <span>
                      <strong>Isolasi Sistem:</strong> Penonaktifkan server terinfeksi dan pembatasan akses eksternal.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-white">•</span>
                    <span>
                      <strong>Penolakan Tebusan:</strong> Tegas menolak membayar $8 juta untuk menjaga kedaulatan data.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-white">•</span>
                    <span>
                      <strong>Audit & Investigasi:</strong> BSSN melakukan audit jalur masuk serangan dan evaluasi tata
                      kelola.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Strategi Mitigasi ke Depan */}
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                  <ArrowRightCircle className="w-6 h-6 text-blue-400" />
                  Strategi Mitigasi ke Depan
                </h4>
                <div className="grid gap-8">
                  {[
                    {
                      title: "Penerapan 3-2-1 Backup Rule",
                      desc: "3 salinan data, 2 media berbeda, 1 salinan disimpan offline (air-gapped) dengan uji pemulihan 2x setahun.",
                    },
                    {
                      title: "Arsitektur Zero Trust & Zero Privilege",
                      desc: "MFA untuk semua akses, segmentasi jaringan, dan pembatasan hak akses (least privilege).",
                    },
                    {
                      title: "Penguatan SOC Nasional 24/7",
                      desc: "Monitoring trafik real-time, deteksi dini berbasis threat intelligence, dan penggunaan EDR/SIEM.",
                    },
                    {
                      title: "Standarisasi Keamanan & SDM",
                      desc: "Kepatuhan ISO/IEC 27001, audit berkala, simulasi serangan (cyber drill), dan edukasi awareness.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
                        <p className="opacity-70 text-white">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[600px] lg:h-auto scroll-animate scroll-animate-delay-3">
              <Image
                src="/futuristic-digital-security-interface-with-maps-an.jpg"
                alt="Mitigation Visual"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Tim Penyusun</h2>
            <h3 className="text-4xl font-bold tracking-tight">Kelompok Cyber Security</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Iryana Salsabillah", id: "23523057" },
              { name: "Yuvita Indah Althaffy", id: "23523218" },
              { name: "Eva Nur Azizah Salim", id: "23523220" },
            ].map((member, i) => (
              <div
                key={i}
                className={`text-center p-8 rounded-2xl bg-secondary/50 border border-transparent hover:border-primary/20 hover:bg-background transition-all scroll-animate scroll-animate-delay-${i + 1}`}
              >

                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.id}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-background scroll-animate">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold tracking-tighter">CYBER ANALYSIS</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Analisis Keamanan Siber Nasional. 
          </p>
        </div>
      </footer>
    </div>
  )
}

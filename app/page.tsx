"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  ChevronDown,
  MapPin,
  Calendar,
  Award,
  Terminal,
  Cpu,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // CV Download Function
  const downloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/cv/Alex_Chen_CV.pdf"
    link.download = "Alex_Chen_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative">
      {/* Ultra-Lightweight CSS Background Animations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated Gradient Orbs - Pure CSS */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-2xl animate-float-fast" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5 animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating Programming Language & SE Logos */}
        {/* React Logo */}
        <div className="absolute top-20 left-20 w-8 h-8 animate-bounce-slow">
          <svg viewBox="0 0 24 24" className="w-full h-full text-cyan-400/40">
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <path
              d="M12 1c-6.628 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* JavaScript Logo */}
        <div className="absolute top-40 right-32 w-6 h-6 animate-bounce-delay-1">
          <div className="w-full h-full bg-yellow-400/40 rounded-sm flex items-center justify-center text-black font-bold text-xs">
            JS
          </div>
        </div>

        {/* Python Logo */}
        <div className="absolute bottom-32 left-1/3 w-7 h-7 animate-bounce-delay-2">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
              fill="url(#python-gradient)"
            />
            <defs>
              <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3776ab" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffd43b" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Node.js Logo */}
        <div className="absolute top-1/3 right-20 w-6 h-6 animate-bounce-delay-3">
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-400/40">
            <path
              d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* TypeScript Logo */}
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 animate-bounce-slow" style={{ animationDelay: "4s" }}>
          <div className="w-full h-full bg-blue-500/40 rounded-sm flex items-center justify-center text-white font-bold text-xs">
            TS
          </div>
        </div>

        {/* Docker Logo */}
        <div className="absolute top-1/2 left-1/4 w-7 h-7 animate-bounce-delay-1" style={{ animationDelay: "5s" }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400/40">
            <path
              d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.938-.089 2.835-.266a11.192 11.192 0 003.090-.142c.94-.4 1.818-.99 2.604-1.75.677-.652 1.248-1.479 1.695-2.454a14.707 14.707 0 001.304-2.330 5.861 5.861 0 002.054-1.281 4.439 4.439 0 001.411-2.331.04.04 0 00-.02-.047z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Git Logo */}
        <div className="absolute bottom-40 left-1/2 w-6 h-6 animate-bounce-delay-2" style={{ animationDelay: "6s" }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-orange-400/40">
            <path
              d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* MongoDB Logo */}
        <div className="absolute top-3/4 right-1/4 w-5 h-7 animate-bounce-delay-3" style={{ animationDelay: "7s" }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-500/40">
            <path
              d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* AWS Logo */}
        <div className="absolute top-1/4 right-1/2 w-8 h-5 animate-bounce-slow" style={{ animationDelay: "8s" }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-orange-500/40">
            <path
              d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.071-.2.071-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.135-.144-.287-.2-.455-.503.592-1.135.888-1.887.888-.537 0-.967-.152-1.279-.457-.312-.304-.47-.71-.47-1.214 0-.537.19-.973.574-1.295.383-.32.894-.48 1.534-.48.214 0 .335.016.527.048.191.032.383.08.598.144v-.48c0-.5-.104-.85-.32-1.063-.215-.215-.58-.32-1.11-.32-.239 0-.487.032-.734.08-.248.048-.487.104-.718.184-.104.04-.183.064-.23.064-.08 0-.12-.056-.12-.175v-.271c0-.088.016-.16.056-.2.04-.048.112-.08.2-.112.247-.127.543-.232.886-.32.344-.087.71-.128 1.095-.128.838 0 1.454.191 1.846.574.394.384.59.966.59 1.75v2.302zm-2.592.927c.207 0 .422-.04.646-.112.224-.072.423-.2.59-.368.103-.111.175-.232.207-.36.032-.127.056-.28.056-.454v-.215c-.15-.04-.32-.072-.51-.096-.19-.023-.375-.032-.551-.032-.394 0-.686.08-.878.24-.191.159-.287.384-.287.67 0 .271.071.48.207.622.144.144.351.215.622.215zm4.846.718c-.103 0-.175-.016-.215-.056-.048-.04-.087-.12-.127-.24l-1.423-4.693c-.04-.135-.064-.224-.064-.271 0-.104.048-.16.151-.16h.622c.104 0 .175.016.215.056.048.04.08.12.112.24l1.015 4.001 .942-4.001c.032-.127.064-.2.112-.24.048-.04.12-.056.215-.056h.51c.104 0 .175.016.215.056.048.04.087.12.112.24l.95 4.049 1.047-4.049c.032-.127.072-.2.112-.24.048-.04.12-.056.215-.056h.59c.104 0 .16.048.16.16 0 .032-.008.064-.016.104-.008.04-.024.095-.048.16l-1.463 4.693c-.04.127-.08.2-.127.24-.048.04-.12.056-.215.056h-.55c-.103 0-.175-.016-.215-.056-.048-.04-.087-.12-.112-.24l-.934-3.89-.926 3.89c-.032.127-.064.2-.112.24-.048.04-.112.056-.215.056h-.55zm7.985.08c-.32 0-.646-.04-.966-.112-.32-.08-.568-.175-.75-.288-.08-.048-.135-.104-.151-.144-.016-.048-.024-.095-.024-.144v-.28c0-.12.048-.175.128-.175.048 0 .096.008.144.032.048.016.12.048.2.08.27.112.56.2.862.248.304.048.606.072.91.072.487 0 .862-.087 1.118-.264.256-.175.384-.423.384-.734 0-.216-.064-.4-.191-.558-.127-.159-.335-.304-.622-.44l-.894-.383c-.454-.191-.79-.47-1.006-.83-.215-.368-.32-.774-.32-1.222 0-.36.072-.678.215-.958.144-.279.335-.52.574-.718.24-.2.518-.35.838-.454.32-.104.655-.16 1.006-.16.144 0 .287.008.423.032.144.016.279.048.415.08.135.032.263.072.383.112.12.048.215.095.279.144.08.056.135.112.167.175.032.064.048.144.048.24v.263c0 .12-.048.184-.128.184-.056 0-.144-.024-.247-.08-.383-.183-.814-.272-1.295-.272-.44 0-.783.072-1.023.224-.24.151-.36.375-.36.67 0 .216.072.4.207.56.136.159.36.32.67.478l.878.383c.447.191.774.456.982.798.207.34.31.728.31 1.165 0 .375-.072.718-.215 1.023-.144.304-.335.566-.574.774-.24.207-.526.367-.862.478-.336.112-.702.168-1.093.168zm1.686-8.04c-.104 0-.16-.048-.16-.16 0-.032.008-.064.024-.104l.622-1.518c.032-.08.072-.135.112-.167.048-.032.104-.048.167-.048h.51c.104 0 .16.048.16.16 0 .032-.008.064-.024.104l-.622 1.518c-.032.08-.072.135-.112.167-.048.032-.104.048-.167.048h-.51zm-14.936 8.04c-.32 0-.646-.04-.966-.112-.32-.08-.568-.175-.75-.288-.08-.048-.135-.104-.151-.144-.016-.048-.024-.095-.024-.144v-.28c0-.12.048-.175.128-.175.048 0 .096.008.144.032.048.016.12.048.2.08.27.112.56.2.862.248.304.048.606.072.91.072.487 0 .862-.087 1.118-.264.256-.175.384-.423.384-.734 0-.216-.064-.4-.191-.558-.127-.159-.335-.304-.622-.44l-.894-.383c-.454-.191-.79-.47-1.006-.83-.215-.368-.32-.774-.32-1.222 0-.36.072-.678.215-.958.144-.279.335-.52.574-.718.24-.2.518-.35.838-.454.32-.104.655-.16 1.006-.16.144 0 .287.008.423.032.144.016.279.048.415.08.135.032.263.072.383.112.12.048.215.095.279.144.08.056.135.112.167.175.032.064.048.144.048.24v.263c0 .12-.048.184-.128.184-.056 0-.144-.024-.247-.08-.383-.183-.814-.272-1.295-.272-.44 0-.783.072-1.023.224-.24.151-.36.375-.36.67 0 .216.072.4.207.56.136.159.36.32.67.478l.878.383c.447.191.774.456.982.798.207.34.31.728.31 1.165 0 .375-.072.718-.215 1.023-.144.304-.335.566-.574.774-.24.207-.526.367-.862.478-.336.112-.702.168-1.093.168z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Code Brackets */}
        <div
          className="absolute bottom-1/3 left-20 text-2xl text-blue-400/30 font-mono animate-bounce-delay-1"
          style={{ animationDelay: "9s" }}
        >
          {"{ }"}
        </div>

        {/* Terminal Symbol */}
        <div
          className="absolute top-2/3 right-40 text-lg text-green-400/30 font-mono animate-bounce-delay-2"
          style={{ animationDelay: "10s" }}
        >
          {"$_"}
        </div>
      </div>

      {/* Pure CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -20px) scale(1.05); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, -15px); }
          50% { transform: translate(-15px, -25px); }
          75% { transform: translate(-25px, 15px); }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.6; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.4); }
        }
        
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 25s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 15s ease-in-out infinite; }
        .animate-grid-move { animation: grid-move 30s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
        .animate-bounce-delay-1 { animation: bounce-slow 7s ease-in-out infinite 1s; }
        .animate-bounce-delay-2 { animation: bounce-slow 8s ease-in-out infinite 2s; }
        .animate-bounce-delay-3 { animation: bounce-slow 6.5s ease-in-out infinite 3s; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        
        /* Hardware acceleration */
        .animate-float-slow, .animate-float-reverse, .animate-float-fast {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              &lt;Alex Chen /&gt;
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 hover:text-blue-400 relative ${
                    activeSection === item.toLowerCase() ? "text-blue-400" : "text-white/70"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                className="text-lg md:text-xl text-blue-400/80 mb-4 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, my name is
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Alex Chen
                </motion.span>
              </h1>

              <h2 className="text-3xl md:text-5xl font-bold text-white/80 mb-6">I build things for the web.</h2>

              <motion.p
                className="text-lg md:text-xl text-white/70 mb-8 max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I'm a 4th-year Computer Science student specializing in building exceptional digital experiences.
                Currently focused on creating innovative web applications with modern technologies.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 pulse-glow"
                    onClick={() => scrollToSection("projects")}
                  >
                    <Terminal className="w-5 h-5 mr-2" />
                    View My Work
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-400/30 text-blue-400 hover:bg-blue-400/10 px-8 py-3 bg-transparent backdrop-blur-sm"
                    onClick={downloadCV}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {[
                  { icon: Github, color: "hover:text-gray-400", href: "https://github.com" },
                  { icon: Linkedin, color: "hover:text-blue-400", href: "https://linkedin.com" },
                  { icon: Mail, color: "hover:text-green-400", href: "mailto:alex.chen@email.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </motion.div>

                {/* Profile Image */}
                <motion.div
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/profile.jpg"
                    alt="Alex Chen - Software Engineer"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = "/placeholder-user.jpg"
                    }}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </motion.div>

                {/* Floating elements around image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Code className="w-6 h-6 text-blue-400" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Terminal className="w-6 h-6 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.p
                className="text-lg text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                I'm a passionate 4th-year Computer Science student with a deep love for technology and innovation. My
                journey in software development has been driven by curiosity and the desire to solve real-world problems
                through code. I specialize in full-stack development with expertise in modern web technologies.
              </motion.p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Code,
                    title: "Frontend Development",
                    desc: "React, Next.js, TypeScript, Tailwind CSS",
                    color: "text-blue-400",
                    bgColor: "bg-blue-500/10",
                  },
                  {
                    icon: Server,
                    title: "Backend Development",
                    desc: "Node.js, Express, Python, Java",
                    color: "text-purple-400",
                    bgColor: "bg-purple-500/10",
                  },
                  {
                    icon: Database,
                    title: "Database & Cloud",
                    desc: "MongoDB, PostgreSQL, AWS, Docker",
                    color: "text-pink-400",
                    bgColor: "bg-pink-500/10",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <item.icon className={`w-8 h-8 ${item.color}`} />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                        <p className="text-white/70">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { name: "JavaScript/TypeScript", level: 90, color: "from-yellow-400 to-orange-400" },
                  { name: "React/Next.js", level: 85, color: "from-blue-400 to-cyan-400" },
                  { name: "Node.js/Express", level: 80, color: "from-green-400 to-emerald-400" },
                  { name: "Python", level: 75, color: "from-blue-500 to-indigo-500" },
                  { name: "MongoDB/PostgreSQL", level: 70, color: "from-purple-400 to-pink-400" },
                  { name: "AWS/Docker", level: 65, color: "from-orange-400 to-red-400" },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-white/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description:
                    "Full-stack MERN application with payment integration, user authentication, and admin dashboard.",
                  tech: ["React", "Node.js", "MongoDB", "Stripe"],
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Task Management App",
                  description:
                    "Collaborative project management tool with real-time updates and team collaboration features.",
                  tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "AI Chat Application",
                  description:
                    "Intelligent chatbot with natural language processing and machine learning capabilities.",
                  tech: ["Python", "TensorFlow", "Flask", "React"],
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden h-full hover:bg-white/10 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-white/10 text-white/80">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    title: "Software Development Intern",
                    company: "TechCorp Solutions",
                    period: "Jun 2024 - Aug 2024",
                    location: "San Francisco, CA",
                    description:
                      "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes.",
                    type: "work",
                  },
                  {
                    title: "Bachelor of Science in Computer Science",
                    company: "University of Technology",
                    period: "2021 - 2025 (Expected)",
                    location: "California, USA",
                    description:
                      "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Machine Learning. GPA: 3.8/4.0",
                    type: "education",
                  },
                  {
                    title: "Frontend Developer",
                    company: "StartupXYZ",
                    period: "Jan 2024 - May 2024",
                    location: "Remote",
                    description:
                      "Built responsive web interfaces and improved user experience. Worked with design team to implement pixel-perfect UI components.",
                    type: "work",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div
                              className={`p-3 rounded-full ${
                                item.type === "work" ? "bg-blue-500/20" : "bg-purple-500/20"
                              }`}
                            >
                              {item.type === "work" ? (
                                <Cpu className="w-6 h-6 text-blue-400" />
                              ) : (
                                <Award className="w-6 h-6 text-purple-400" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                              <p className="text-blue-400 font-medium mb-2">{item.company}</p>
                              <div className="flex items-center gap-4 text-white/60 text-sm mb-3">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {item.period}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {item.location}
                                </span>
                              </div>
                              <p className="text-white/80">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <motion.p
              className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 pulse-glow"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  alex.chen@email.com
                </Button>
              </motion.div>
              <div className="flex gap-4">
                {[
                  { icon: Github, color: "hover:bg-gray-600/20" },
                  { icon: Linkedin, color: "hover:bg-blue-600/20" },
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className={`border-white/30 text-white bg-transparent backdrop-blur-sm ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">© 2024 Alex Chen. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

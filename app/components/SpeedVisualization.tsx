"use client"

import { useEffect, useState } from "react"

const generateHex = (length: number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 16).toString(16)).join("")
}

const generateProgressBar = (progress: number) => {
  const width = 30
  const filled = Math.floor((progress / 100) * width)
  return `[${filled > 0 ? "=" : " "}${">".repeat(Math.min(1, filled))}${" ".repeat(Math.max(0, width - filled - 1))}] ${progress}%`
}

const serverResponses = [
  "Verification successful",
  "Certificate valid",
  "Signature matched",
  "Access granted",
  "Server authenticated",
]

const commands = [
  () => `Device detected: iPhone [SN: ${generateHex(8)}]`,
  () => `[INFO] Found susceptible device: iPhone10,${Math.floor(Math.random() * 6) + 1}`,
  () => `[*] Connecting to Apple verification server...`,
  (progress: number) => `[*] Verifying device eligibility ${generateProgressBar(progress)}`,
  () =>
    `[+] Server response: ${serverResponses[Math.floor(Math.random() * serverResponses.length)]} [${generateHex(6)}]`,
  () => `[*] Setting up the exploit (automated)`,
  () => `[*] Executing checkm8 exploit [${generateHex(4)}]`,
  () => `Uploading payload [${generateHex(8)}]`,
  (progress: number) => `[*] Uploading exploit chain ${generateProgressBar(progress)}`,
  () => `Memory region: 0x${generateHex(8)} - 0x${generateHex(8)}`,
  () => `[*] Stage 1: Configuring USB device`,
  () => `[*] Stage 2: Triggering vulnerability`,
  () => `[*] Stage 3: Sending payload (${generateHex(4)} bytes)`,
  (progress: number) => `[*] Injecting payload ${generateProgressBar(progress)}`,
  () => `[+] Payload injection complete [${generateHex(8)}]`,
  () => `[*] Patching kernel at 0x${generateHex(8)}`,
  () => `[*] Disabling codesigning`,
  () => `[+] Root access granted - UID: ${generateHex(4)}`,
  () => `[*] Creating system backup...`,
  (progress: number) => `[*] Backing up system ${generateProgressBar(progress)}`,
  () => `[+] Backup complete: ${generateHex(8)}.tar`,
  () => `[*] Starting system integrity scan`,
  () => `[*] Scanning /root ${generateHex(6)}`,
  () => `[*] Scanning /usr ${generateHex(6)}`,
  () => `[*] Scanning /bin ${generateHex(6)}`,
  (progress: number) => `[*] Verifying system integrity ${generateProgressBar(progress)}`,
  () => `[+] Integrity check passed: ${generateHex(40)}`,
  () => `[*] Finalizing jailbreak`,
  () => `[SUCCESS] Jailbreak complete - System ready`,
  () => `[INFO] Device security level: ${generateHex(4)}`,
  () => `[INFO] Kernel patch state: Active`,
]

export default function SpeedVisualization() {
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setLines((prevLines) => {
        const newLines = [...prevLines]
        if (newLines.length >= 12) newLines.shift()
        const command = commands[Math.floor(Math.random() * commands.length)]
        const progress = Math.floor(Math.random() * 100)
        newLines.push(command(progress) || command())
        return newLines
      })
    }, 180) // Faster updates

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-violet">Unparalleled Speed</h2>
        <div className="bg-black rounded-lg overflow-hidden">
          <div className="font-mono text-sm text-green-400 p-4 leading-relaxed">
            {lines.map((line, index) => (
              <p key={index} className="whitespace-nowrap">
                $ {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


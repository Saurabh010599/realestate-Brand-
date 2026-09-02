import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calculator, Landmark, ShieldCheck, IndianRupee, PieChart, ArrowRight } from 'lucide-react';

interface MortgageCalculatorProps {
  onOpenScheduleModal: () => void;
}

export const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ onOpenScheduleModal }) => {
  const [propertyPrice, setPropertyPrice] = useState<number>(8500000); // 85 Lakhs default
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  // Calculations
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const principalLoanAmount = propertyPrice - downPaymentAmount;

  const monthlyInterestRate = interestRate / 12 / 100;
  const totalMonths = loanTenureYears * 12;

  const monthlyEMI =
    principalLoanAmount > 0 && monthlyInterestRate > 0
      ? Math.round(
          (principalLoanAmount *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, totalMonths)) /
            (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
        )
      : 0;

  const totalPayment = monthlyEMI * totalMonths;
  const totalInterestPayable = totalPayment - principalLoanAmount;

  // Maharashtra Chandrapur Stamp Duty estimate: ~6% (5% Stamp Duty + 1% Local Cess) + ~₹30,000 Registration
  const stampDutyEstimate = Math.round(propertyPrice * 0.06);
  const registrationFee = 30000;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#061611] text-[#F4F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2019] border border-[#D4AF37]/30 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
              Financial Advisory & Investment
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]">
            Luxury Home Loan & EMI Estimator
          </h2>
          <p className="text-[#A3B8B0] text-sm sm:text-base mt-3 font-sans-luxury">
            Calculate your estimated monthly investment with preferred bank partners (SBI, HDFC, ICICI, Axis) with Maharashtra stamp duty breakdowns.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Sliders */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-[#0F2A21] to-[#081813] border border-[#D4AF37]/30 p-6 sm:p-8 shadow-2xl flex flex-col justify-between gap-6">
            {/* Slider 1: Property Value */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[#A3B8B0]">
                  Estimated Property Value
                </label>
                <span className="font-mono text-base font-bold text-[#D4AF37]">
                  {formatCurrency(propertyPrice)}
                </span>
              </div>
              <input
                type="range"
                min="4500000"
                max="25000000"
                step="250000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer h-2 bg-[#061611] rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#7A938A]">
                <span>₹ 45 Lakhs</span>
                <span>₹ 1.25 Cr</span>
                <span>₹ 2.50 Cr</span>
              </div>
            </div>

            {/* Slider 2: Down Payment */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[#A3B8B0]">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="font-mono text-base font-bold text-[#F3E5AB]">
                  {formatCurrency(downPaymentAmount)}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer h-2 bg-[#061611] rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#7A938A]">
                <span>10% (Min)</span>
                <span>20% (Standard)</span>
                <span>60%</span>
              </div>
            </div>

            {/* Slider 3: Loan Tenure */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[#A3B8B0]">
                  Loan Tenure (Years)
                </label>
                <span className="font-mono text-base font-bold text-[#F3E5AB]">
                  {loanTenureYears} Years ({totalMonths} Months)
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={loanTenureYears}
                onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer h-2 bg-[#061611] rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#7A938A]">
                <span>5 Years</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Slider 4: Interest Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[#A3B8B0]">
                  Interest Rate (% p.a.)
                </label>
                <span className="font-mono text-base font-bold text-[#D4AF37]">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min="7.5"
                max="12.0"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer h-2 bg-[#061611] rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#7A938A]">
                <span>7.5% (SBI/HDFC)</span>
                <span>8.5%</span>
                <span>12.0%</span>
              </div>
            </div>

            {/* Approved Banks Strip */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-[#A3B8B0]">Pre-Approved Home Loans by:</span>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D4AF37]">
                <span>SBI</span> • <span>HDFC BANK</span> • <span>ICICI</span> • <span>AXIS</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0B2019] border border-[#D4AF37]/50 p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  Estimated Monthly EMI
                </span>
                <span className="px-2.5 py-1 rounded bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold uppercase">
                  Zero Processing Offer
                </span>
              </div>

              {/* Huge EMI Value */}
              <div className="my-6">
                <div className="font-cinzel text-3xl sm:text-4xl font-black text-[#F4F1EA]">
                  ₹ {monthlyEMI.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-[#A3B8B0] mt-1 font-sans-luxury">
                  Monthly installment for {loanTenureYears} years tenure
                </div>
              </div>

              {/* Detailed Breakdown Rows */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#A3B8B0]">Principal Loan Amount:</span>
                  <span className="font-mono font-bold text-[#F4F1EA]">
                    {formatCurrency(principalLoanAmount)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#A3B8B0]">Total Interest Payable:</span>
                  <span className="font-mono font-bold text-[#D4AF37]">
                    {formatCurrency(totalInterestPayable)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#A3B8B0]">Total Amount (Principal + Int):</span>
                  <span className="font-mono font-bold text-[#F4F1EA]">
                    {formatCurrency(totalPayment)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#A3B8B0]">Est. Maharashtra Stamp Duty (6%):</span>
                  <span className="font-mono text-[#CAD6D2]">
                    {formatCurrency(stampDutyEstimate)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5">
                  <span className="text-[#A3B8B0]">Govt. Registration Charges:</span>
                  <span className="font-mono text-[#CAD6D2]">
                    {formatCurrency(registrationFee)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                onClick={onOpenScheduleModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#DFBF74] to-[#C49836] text-xs font-bold uppercase tracking-wider text-[#061611] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_28px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center gap-2"
              >
                <span>Get Bank Sanction & Visit Site</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

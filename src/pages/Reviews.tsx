import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
 const reviews = [
  {
    name: "Chaitanya Kada",
    rating: 5,
    text: "I was nervous before my tooth filling, but the procedure was completely painless and quick. The doctor handled everything smoothly."
  },
  {
    name: "Gaming Stars",
    rating: 5,
    text: "Visited for root canal treatment and had a great experience. The doctor treated me very well and now I feel completely fine."
  },
  {
    name: "Raval Shrasa",
    rating: 5,
    text: "The clinic is super clean and well-equipped. My smile designing results were amazing. Highly recommended for quality dental care."
  },
  {
    name: "Happy Patient",
    rating: 5,
    text: "Doctor diagnosis is accurate and treatment is very effective. Friendly staff and great experience."
  },
  {
    name: "Satisfied Patient",
    rating: 5,
    text: "Very professional doctor with modern equipment. The clinic is clean and treatment was completely painless."
  },
  {
    name: "Local Guide",
    rating: 5,
    text: "Best dental clinic in Mehsana. Friendly staff, advanced technology, and excellent results."
  }
];

const Reviews = () => (
  <main>
    <PageHeader title="Patient Reviews" subtitle="4.9★ rated dental clinic in Mehsana with 50+ happy patients" />

    <SectionWrapper>
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-secondary">
          <Star size={20} className="text-accent fill-accent" />
          <span className="font-display font-bold text-xl">4.9</span>
          <span className="text-muted-foreground text-sm">— 290+ Google Reviews</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="card-soft card-hover p-6"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} size={14} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-sm text-primary">
                {r.name[0]}
              </div>
              <p className="font-display font-semibold text-sm">{r.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  </main>
);

export default Reviews;

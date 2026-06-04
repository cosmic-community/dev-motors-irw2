import { getTeamMembers } from '@/lib/cosmic'
import TeamCard from '@/components/TeamCard'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Team — DEV MOTORS',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div>
      <PageHero
        title="Meet the Team"
        subtitle="The experienced professionals driving your success."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {team.length === 0 ? (
          <p className="text-center text-ink-500">No team members available yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
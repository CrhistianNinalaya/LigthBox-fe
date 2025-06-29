'use client'
import IsLoading from '@/components/IsLoading/IsLoading'
import { SeatsMovie } from '@/components/SeatsMovie/SeatsMovie'
import { useSeatsQuery } from '@/hooks/useChairs.hook'
import { use, useState } from 'react'

interface Params {
	id: string
}

const SeatsSelectionPage = ({ params }: { params: Promise<Params> }) => {
	const unwrappedParams = use(params)
	const { id } = unwrappedParams
	const { data, isLoading } = useSeatsQuery(id)
	const [selectedSeats, setSelectedSeats] = useState<Record<string, boolean>>({})

	return (
		<div className="flex flex-col gap-2">
			{isLoading ? (
				<IsLoading />
			) : (
				<>
					<SeatsMovie
						seats={data}
						setSelectedSeats={setSelectedSeats}
						selectedSeats={selectedSeats}
					/>
				</>
			)}
		</div>
	)
}

export default SeatsSelectionPage

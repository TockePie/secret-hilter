export type PolicyTilesType = 'fascist' | 'liberal'

export interface PolicyTilesProps {
  id: number
  type: PolicyTilesType
}

export interface TilesSnapshotProps extends PolicyTilesProps {
  disabled?: boolean
}

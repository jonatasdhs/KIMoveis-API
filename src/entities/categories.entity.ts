import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { RealEstate } from './realEstate.entity'

@Entity('categories')

export class Category {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({length: 45, unique: true})
    name: string
    
    @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
    realEstate: RealEstate
}

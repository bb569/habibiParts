import {createRouteHandlerClient}from "@supabase/auth-helpers-nextjs"
import { SupabaseClient } from "@supabase/supabase-js"
export const dynamic = ' force-dynamic'
export async function POST(request) {
    const ticket = await request.json()
    const sb = createRouteHandlerClient()
    const {data:{ session }} = await supabase.auth.getSession()
    const {data , error}=await supabase.from('habibi')
}
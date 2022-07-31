import React, { useEffect } from "react";
import { useWeb3ExecuteFunction } from "react-moralis";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import close from '../../../assets/icons/x.png'
import { CALL_STORAGE_OBJ } from "../../../contractConfig";
import useScaNUSTokens from "../../../misc/hooks/useScaNUSTokens";

export default function MintModal(props) {
	const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction(CALL_STORAGE_OBJ)
	const { addToken } = useScaNUSTokens()
	const mint = () => {
		if (props.token) {
			fetch()
			// CHANGE BELOW TO IF FETCH SUCCESSFUL
			if (true) {
				addToken(props.token.tokenId)
			} else {
				// CAN OPEN A MODAL HERE TO SHOW THAT TRANSACTION UNSUX
			}
			props.close()
		}
	}
	useEffect(() => {
		// console.log(`data: ${data}`)
		// console.log(`erro: ${error}`)
		// console.log(`isFetching: ${isFetching}`)
		// console.log(`isLoading: ${isLoading}`)
		// console.log()
	}, [isFetching, data, isLoading])
	return (
		<Modal visible={!!props.token} transparent={true} onRequestClose={props.close}>
			{
				props.token && (
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
						<View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10 }}>
							<View style={{ display: 'flex', padding: 30, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
								<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mint Token</Text>
								<TouchableOpacity onPress={props.close}>
									<Image source={close} style={{ width: 30, height: 30 }}/>
								</TouchableOpacity>
							</View>
							<View style={{ padding: 30, paddingTop: 10 }}>
								<Text style={{ fontSize: 18, lineHeight: 18*1.618 }}>You found a new token! You are now able to mint <Text style={{ fontWeight: 'bold' }}>{props.token.name}</Text></Text>
								<TouchableOpacity onPress={mint} activeOpacity={0.8} style={{ backgroundColor: '#364378', padding: 12, marginTop: 24, alignItems: 'center', width: 120, borderRadius: 12 }}>
									<Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Mint!</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)
			}
		</Modal>
	)
}